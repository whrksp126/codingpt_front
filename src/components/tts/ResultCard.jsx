import React, { useState, useCallback, useRef } from 'react';
import AudioPlayer from './AudioPlayer';
import WordHighlighting from './WordHighlighting';
import { deleteRequest, saveTTS } from '../../utils/ttsApi';

const ResultCard = ({ request, onDelete, onSave }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [s3Path, setS3Path] = useState('');
  const [customFileName, setCustomFileName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const handleTimeUpdate = useCallback((time) => {
    if (time !== undefined && time !== null && time >= 0) {
      setCurrentTime(time);
    }
  }, []);

  const handlePlayStateChange = useCallback((playing) => {
    setIsPlaying(playing);
  }, []);

  const handleSeek = useCallback((time) => {
    setCurrentTime(time);
  }, []);

  const handleWordClick = useCallback((startTime) => {
    handleSeek(startTime);
  }, [handleSeek]);

  const handleSave = async () => {
    if (!s3Path.trim()) {
      setSaveError('S3 경로를 입력해주세요.');
      return;
    }

    try {
      setIsSaving(true);
      setSaveError(null);
      const response = await saveTTS(
        request.requestId,
        s3Path.trim(),
        customFileName.trim() || null
      );

      if (response.success) {
        setSaveSuccess(true);
        if (onSave) {
          onSave(request.requestId, response.data);
        }
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (error) {
      setSaveError(error.message || '저장에 실패했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('정말 이 생성 결과를 삭제하시겠습니까?')) {
      return;
    }

    try {
      setIsDeleting(true);
      await deleteRequest(request.requestId);
      if (onDelete) {
        onDelete(request.requestId);
      }
    } catch (error) {
      alert(error.message || '삭제에 실패했습니다.');
      setIsDeleting(false);
    }
  };

  return (
    <div className="border-b border-gray-200 pb-6 space-y-4">
      <div className="border-b border-gray-200 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-gray-900">
              {request.fileName || `생성 결과 #${request.requestId}`}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              목소리: {request.voiceId} | 모델: {request.modelId}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              생성 시간: {new Date(request.createdAt).toLocaleString('ko-KR')}
            </p>
          </div>
          {request.isSaved && (
            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
              저장됨
            </span>
          )}
        </div>
      </div>

      <AudioPlayer
        audioUrl={request.audioUrl}
        currentTime={currentTime}
        duration={duration}
        isPlaying={isPlaying}
        onDurationChange={setDuration}
        onTimeUpdate={handleTimeUpdate}
        onPlayStateChange={handlePlayStateChange}
        onSeek={handleSeek}
      />

      {/* 워드 하이라이팅 */}
      <WordHighlighting
        text={request.text}
        timestamps={request.timestamps}
        currentTime={currentTime}
        isPlaying={isPlaying}
        onWordClick={handleWordClick}
      />

      {!request.isSaved && (
        <div className="pt-2 border-t border-gray-200">
          <div className="flex flex-wrap items-end gap-2">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                S3 경로
              </label>
              <input
                type="text"
                value={s3Path}
                onChange={(e) => setS3Path(e.target.value)}
                placeholder="user-123/audio/"
                className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                파일명 (선택)
              </label>
              <input
                type="text"
                value={customFileName}
                onChange={(e) => setCustomFileName(e.target.value)}
                placeholder="선택사항"
                className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm whitespace-nowrap"
            >
              {isSaving ? '저장 중...' : '저장'}
            </button>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="px-4 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm whitespace-nowrap"
            >
              {isDeleting ? '삭제 중...' : '삭제'}
            </button>
          </div>
          {saveError && (
            <div className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded">
              {saveError}
            </div>
          )}
          {saveSuccess && (
            <div className="mt-2 text-xs text-green-600 bg-green-50 p-2 rounded">
              저장되었습니다!
            </div>
          )}
        </div>
      )}

      {request.isSaved && (
        <div className="pt-2 border-t border-gray-200">
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isDeleting ? '삭제 중...' : '삭제'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultCard;


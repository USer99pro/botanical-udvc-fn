/**
 * Extract YouTube ID from various URL formats (watch, shorts, embed, youtu.be)
 */
export function getYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/i);
  return match ? match[1] : null;
}

/**
 * Extract TikTok video ID from URL
 */
export function getTikTokId(url) {
  if (!url) return null;
  const match = url.match(/\/video\/(\d+)/i);
  return match ? match[1] : null;
}

/**
 * Map aspect ratio string to Tailwind aspect ratio classes
 */
export function getAspectRatioClass(ratio = '16:9') {
  switch (ratio) {
    case '9:16':
      return 'aspect-[9/16]';
    case '4:3':
      return 'aspect-[4/3]';
    case '16:9':
    default:
      return 'aspect-video';
  }
}

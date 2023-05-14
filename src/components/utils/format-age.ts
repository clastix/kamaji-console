export function formatAge(from = new Date()) {
  from = new Date(from);
  let dist = (new Date().getTime() - from.getTime()) / 1000;
  if (dist < 60) {
    return `${Math.round(dist)}s`;
  }
  dist = dist / 60;
  if (dist < 60) {
    return `${Math.round(dist)}m`;
  }
  dist = dist / 60;
  if (dist < 24) {
    return `${Math.round(dist)}h`;
  }
  dist = dist / 24;
  return `${Math.round(dist)}d`;
}

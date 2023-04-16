export function validateTitle(title) {
  if (title?.trim().length < 4) {
    return "Title is too short. It needs to be at least 4 characters long.";
  }

  return null;
}

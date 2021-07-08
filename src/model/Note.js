class Note {
  constructor(
    title,
    creator,
    content
  ) {
    this.title = title;
    this.creator = creator;
    this.content = content;

    const newDate = new Date();
    const timeFormat = {
      year: newDate.getFullYear(),
      month: (newDate.getMonth() < 9) ? `0${newDate.getMonth() + 1}` : newDate.getMonth(),
      day: (newDate.getDay() < 10) ? `0${newDate.getDay()}` : newDate.getDay(),
    }
    this.date = `${timeFormat.year}-${timeFormat.month}-${timeFormat.day}`; // YYYY-MM-DD
  }
}

export default Note;
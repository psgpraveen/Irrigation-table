export function toMinutes(t) {
  return parseInt(t.slice(0, 2)) * 60 + parseInt(t.slice(2, 4));
}

export function fromMinutes(m) {
  return (
    String(Math.floor(m / 60)).padStart(2, "0") +
    String(m % 60).padStart(2, "0") +
    "00"
  );
}

export function getCurrentTime() {
  const now = new Date();
  return (
    String(now.getHours()).padStart(2, "0") +
    String(now.getMinutes()).padStart(2, "0") +
    String(now.getSeconds()).padStart(2, "0")
  );
}

import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Bấm nút sẽ thay đổi tiêu để website theo số lần bấm nút
    document.title = `Bạn đã click ${count} lần`;
  }, [count]);

  return (
    <div>
      <p>Bạn đã click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
}

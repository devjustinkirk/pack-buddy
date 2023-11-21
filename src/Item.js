export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <p style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </p>
        <button onClick={() => onDeleteItem(item.id)}>&times;</button>
      </li>
    </div>
  );
}

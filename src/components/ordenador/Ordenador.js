function Ordenador({ criterio, sentido, onChange }) {
  return (
    <div>
      <select name="criterio" value={criterio} onChange={onChange}>
        <option value="año">Año</option>
        <option value="rating">Rating</option>
      </select>

      <select name="sentido" value={sentido} onChange={onChange}>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  );
}
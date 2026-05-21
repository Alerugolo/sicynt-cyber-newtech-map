type Props = {
  categories: string[];
  selectedCategories: string[];
  rangeDays: number;
  onToggleCategory: (category: string) => void;
  onRangeChange: (days: number) => void;
};

export default function Filters({ categories, selectedCategories, rangeDays, onToggleCategory, onRangeChange }: Props) {
  return (
    <section className="filters">
      <h2>Filtri</h2>
      <div className="field">
        <label htmlFor="rangeDays">Orizzonte temporale</label>
        <select id="rangeDays" value={rangeDays} onChange={(event) => onRangeChange(Number(event.target.value))}>
          <option value={30}>Prossimi 30 giorni</option>
          <option value={60}>Prossimi 60 giorni</option>
          <option value={90}>Prossimi 90 giorni</option>
        </select>
      </div>
      <div className="field">
        <label>Categorie</label>
        <div className="category-buttons">
          {categories.map((category) => {
            const active = selectedCategories.includes(category);
            return (
              <button
                className={`category-button${active ? " active" : ""}`}
                key={category}
                onClick={() => onToggleCategory(category)}
                type="button"
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

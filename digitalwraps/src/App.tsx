import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Polomolok", "Cebu", "Gensan", "Manila"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

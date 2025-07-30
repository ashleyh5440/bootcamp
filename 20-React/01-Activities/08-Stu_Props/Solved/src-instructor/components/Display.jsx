import Card from './Card';

export default function Display() {
  const feline = {
    name: 'Fluffykins',
    description: 'A cat that acts like a dog',
    id: 1,
  };

  return (
    <div>
        <Card 
          id={feline.id} 
          description={feline.description}
          name={feline.name}
          />
        {/* TODO: Write logic that will render a Card component for the kitten */}
        {/* TODO: Pass `name`, `description`, and `id` to the Card component as props */}
    </div>
  );
}

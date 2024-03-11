import FurnitureCard from '../app/components/cards/FurnitureCard'
import './styles.css'


export default function Home() {
  return (
    <main className="main-body p-10">
        <FurnitureCard name='flat chair' price={40} buy='buy now' image="/dd.png" />
    </main>
  );
}

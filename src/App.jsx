import PackingList from "./components/Avatar";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div>
      <div>
        <Profile>
          <PackingList />
        </Profile>
      </div>
    </div>
  );
}

import './App.css';
import PostForm from './components/PostForm';
// import GrandParent from './components/GrandParent';
// import { RoleProvider, UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Nabendu">
        <RoleProvider value="Admin">
          <GrandParent />
        </RoleProvider>
      </UserProvider> */}
      <PostForm />
    </div>
  );
}

export default App;

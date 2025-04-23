import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const fetchData = async () => {

const user = await fetch("http://localhost:3000/api/auth/getData")
const userDetail = await user.json()
setUser(userDetail)


  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
      <div className="max-w-2xl bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Home Page! 🎉</h1>
        <p className="mt-4 text-lg text-gray-600">
          Hello {user.name}You have successfully logged in. Explore and enjoy our services!
        </p>
        <button
          onClick={() => navigate("/loggin")}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;

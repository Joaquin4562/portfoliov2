import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin } from "./pages/admin/Admin";
import { Login } from "./pages/admin/Login";
import { ProjectsAdmin } from './pages/admin/ProjectsAdmin'
import { Main } from "./pages/Main";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="admin" element={<Admin />} >
					<Route path="login" element={<Login />} />
					<Route path="projects" element={<ProjectsAdmin />} />
				</Route>
				<Route path="/" element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
};

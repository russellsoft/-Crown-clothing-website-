import { useState, createContext, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utilities/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
	products: []
})

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState([])

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments()
			setCategoriesMap(categoryMap)
		}

		getCategoriesMap()
	}, [])

	const value = { categoriesMap }
	return (
		<CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
	)
}
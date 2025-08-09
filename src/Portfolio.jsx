import './Portfolio.css'
import EventCart from './EventCart';
import { useState, useEffect } from 'react';

export default function Portfolio() {
    const [allCategories, setAllCategories] = useState(null); // Store original data
    const [filteredCategories, setFilteredCategories] = useState(null); // Store filtered data
    const [activeFilter, setActiveFilter] = useState('All'); // Track active button
    
    useEffect(() => {
        console.log('useEffect called');
        fetch('http://localhost:5000/categories')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            setAllCategories(data);
            setFilteredCategories(data); // Initially show all
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
    }, []);
     
    if (!filteredCategories) {
        return <h3>Loading...</h3>;
    }

    // Filter function
    const filterByCategory = (categoryName) => {
        setActiveFilter(categoryName);
        
        if (categoryName === 'All') {
            setFilteredCategories(allCategories);
        } else {
            const filtered = allCategories.filter(cate => 
                cate.category.toLowerCase() === categoryName.toLowerCase()
            );
            setFilteredCategories(filtered);
        }
    };

    const categoriesList = filteredCategories.map((cate) =>
        <EventCart 
            key={cate.id}
            category={cate.category}
            images={cate.images}
            id={cate.id}
        />
    );

    return (
        <div className='portfolio-gallery'>
            <div className='portfolio-text'>
                <h1>Portfolio Gallery</h1>
                <p>Explore our diverse collection of photography work across different categories and <br/> styles</p>
            </div>
            
            {/* Filter Buttons */}
            <div className='filter-buttons'>
                {['All', 'Wedding', 'Portrait', 'Events'].map(category => (
                    <button 
                        key={category}
                        className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                        onClick={() => filterByCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            
            {/* Display filtered categories */}
            <div className='categories-container'>
                {categoriesList.length > 0 ? categoriesList : 
                    <p>No images found for this category.</p>
                }
            </div>
        </div>
    );
}
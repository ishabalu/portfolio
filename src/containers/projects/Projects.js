import React, { useState, useEffect, lazy, Suspense } from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import Button from "../../components/button/Button";
export default function Projects() {
    const FailedLoading = () => <div>Error loading projects.</div>;
    const renderLoader = () => <div>Loading...</div>;
    const [repo, setrepo] = useState([]);

    useEffect(() => {
        // Use the JSON data directly instead of fetching it
        const jsonData = {
            data: {
                user: {
                    pinnedItems: {
                        edges: [
                            {
                                node: {
                                    id: '1',
                                    name: 'Movie Mates : Booking Management System',
                                    description: `The "Booking Management System" project, developed by a team of five in a Scrum framework 
                                    over four sprints, streamlines the booking process for items like movie tickets through various user views, 
                                    including customers, management, onsite employees, and customer support teams. Core features include a 
                                    comprehensive search function with autocomplete, filters, and seat selection options, allowing users to 
                                    book tickets, apply offers, and make payments without logging in, while receiving confirmation emails 
                                    and QR codes. The system supports multiple login/signup methods and password reset options. User profiles 
                                    capture basic information and interests, with dashboards displaying membership status, promotional offers, 
                                    and reward points. Users can save and change payment details, while a separate business management dashboard 
                                    provides access to booking data, visualizations for sales, profits, and expenses, and the ability to release 
                                    promotional notifications. Chat support with message status and employee user status enhances customer service. 
                                    This system is crucial for providing a user-friendly interface and efficient management tools, improving the 
                                    overall booking experience.`,
                                    techIcons: [require('../../assets/images/movies.png')],
                                    githubRepoUrl: "https://github.com/Dracon1023/Booking_Management_System_Frontend",
                                },
                            },
                            {
                                node: {
                                    id: '2',
                                    name: 'Strength Training for Fitness Trackers',
                                    description: `The "Strength Training Activity Recognition" project leverages advancements in 
                                    wearable sensors like accelerometers and gyroscopes to monitor and classify human activities using 
                                    smartwatches. This project addresses societal issues such as rehabilitation, elderly care, and 
                                    overall health by employing machine learning techniques. Data collection involves using various 
                                    sensors integrated into smart devices, with a focus on accelerometers and gyroscopes. To ensure 
                                    data integrity, Chauvenet’s outlier detection method is used to remove noise, and interpolation is 
                                    employed to handle missing values. Feature engineering includes applying a Butterworth low-pass filter
                                     to mitigate high-frequency noise. Principal Component Analysis (PCA) is used for feature reduction, 
                                     identifying three principal components, while K-means clustering reveals five effective clusters. 
                                     The project explores various algorithms, including neural networks, random forests, decision trees, 
                                     Naïve Bayes, and KNN, using four distinct feature sets: raw sensor data, enriched features, temporal 
                                     abstraction, and frequency-domain features. The decision to use accelerometers for repetition counting 
                                     is based on their ability to provide clear waveforms, enhancing the accuracy of exercise classification 
                                     and monitoring. This comprehensive approach ensures robust data analysis and reliable machine learning 
                                     models for activity recognition.`,
                                    techIcons: [require('../../assets/images/strength.png')],
                                    githubRepoUrl: "https://github.com/ishabalu/Strength-Training-Tracker",
                                },
                            },
                            {
                                node: {
                                    id: '3',
                                    name: 'Malicious URL Detection',
                                    description: `The "Malicious URL Detection Using Machine Learning" project addresses web security 
                                    by detecting malicious URLs, commonly used by hackers to leak confidential data. Traditional 
                                    methods rely on Blacklists, which struggle with newly generated malicious URLs. This project 
                                    employs a machine learning approach, using ensemble learning to improve detection accuracy by 
                                    focusing on misclassified data instances, reducing error rates, and enhancing classification 
                                    accuracy. An ensemble approach with evolutionary reasoning assigns weights to base classifiers 
                                    and selects the best committee members for optimal classification. The dataset includes various 
                                    URL attributes, and data cleaning involves handling null values and balancing the dataset with 
                                    the SMOTE technique. The project builds and tunes a KNN model and tests three Naïve Bayes models, 
                                    concluding that Bernoulli’s Naïve Bayes is the most efficient. Bagging classifiers and a Voting 
                                    Classifier enhance predictions, validated using K-Fold Cross Validation, achieving a highest 
                                    accuracy of 91.5%. Data visualization aids in feature selection, and the ROC curve verifies model 
                                    performance, significantly improving the detection of malicious URLs and providing accurate, 
                                    efficient web security solutions.`,
                                    techIcons: [require('../../assets/images/malicious.png')],
                                    githubRepoUrl: "https://github.com/ishabalu/Malicious-URL-Detection",
                                },
                            },
                            {
                                node: {
                                    id: '2',
                                    name: 'Buy That : Sentiment Analysis',
                                    description: `The “Buy That" project addresses the challenge of selecting the right product
                   by leveraging sentiment analysis on Amazon reviews. Recognizing that product 
                   specifications alone do not provide a complete picture, this project focuses 
                   on analyzing customer feedback to help users make informed decisions. Users 
                   input their desired product and specific features, and the system generates 
                   an Amazon URL to randomly select three products. Reviews for these products 
                   are scraped using Octoparse, resulting in a CSV file. The review text undergoes 
                   preprocessing to remove stop words, numbers, special characters, and white spaces 
                   using Python’s regular expression module. Sentiment analysis is then performed, involving 
                   word tokenization and POS tagging, with special handling for negations (e.g., “not bad” becomes “good”). 
                   Each review is scored based on its sentiment (positive, negative, or neutral), and the overall 
                   sentiment for each product is determined by the majority sentiment of its reviews. The project 
                   utilizes technologies such as Pandas for data manipulation, Matplotlib for visualization, NLTK 
                   for natural language processing, and Wordcloud for visualizing frequent words. Ultimately, the 
                   system identifies the best product based on sentiment analysis, simplifying the decision-making 
                   process for users.`,
                                    techIcons: [require('../../assets/images/NLP.png')],
                                    githubRepoUrl: "https://github.com/ishabalu/NLP-project",
                                },
                            },
                            {
                                node: {
                                    id: '3',
                                    name: 'Distance-Calculator',
                                    description: `The "Distance-Calculator" project utilizes Google Cloud Platform (GCP) 
                  and Python to calculate travel distances between locations. By leveraging the Geocoding 
                  API, the project converts addresses into geographic coordinates and vice versa. 
                  The Distance Matrix API is used to access travel distances between multiple origins 
                  and destinations. Key Python modules include googlemaps for accessing the Distance Matrix API, 
                  geocoder for the Geocoding API, Geopy for reverse geocoding, 
                  subprocess for obtaining the device's current GPS location, 
                  tkinter for creating the GUI, and PIL for adding a background image to the interface. 
                  This project simplifies the process of calculating distances, 
                  providing a user-friendly interface for efficient navigation.`,
                                    techIcons: [[require('../../assets/images/distance.png')]],
                                    githubRepoUrl: "https://github.com/ishabalu/Distance-Calculator",
                                },
                            },
                            
                            // Add more projects as needed
                        ],
                    },
                },
            },
        };
        setrepoFunction(jsonData.data.user.pinnedItems.edges);
    }, []);

    function setrepoFunction(array) {
        console.log('Setting repo state with:', array);
        setrepo(array);
    }

    if (!(typeof repo === "string" || repo instanceof String)) {
        return (
            <Suspense fallback={renderLoader()}>
                <div className="main" id="opensource">
                    <h1 className="project-title">Projects</h1>
                    <div className="repo-cards-div-main">
                        {repo.map((v, i) => {
                            return (
                                <ProjectCard
                                    key={v.node.id}
                                    title={v.node.name}
                                    description={v.node.description}
                                    techIcons={v.node.techIcons}
                                    githubRepoUrl={v.node.githubRepoUrl} 
                                />

                            );
                        })}

                    </div>


                </div>
            </Suspense>
        );
    } else {
        return <FailedLoading />;
    }
}

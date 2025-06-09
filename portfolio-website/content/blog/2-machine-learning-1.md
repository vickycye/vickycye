---
title: 'What is Machine Learning?'
date: '2025-06-05'
excerpt: 'Machine learning powers Netflix recommendations and Spotify playlists—algorithms that learn patterns from data to predict the future. Like teaching a brilliant student, ML systems examine past observations to build models...'
author:
  name: 'Vicky Ye'
  bio: "Current student in UW's CSE 446 Machine Learning class!"
  image: '/images/vy_avatar.jpg'
tags: ['Machine Learning', 'Computer Science']
---

# What is Machine Learning?

---
**For non-technical audiences** //
Scroll down to see the version for technical audiences.
#### You're Already Living In a Machine Learning World
You probably already know this but, before ChatGPT made headlines, you were already interacting with machine learning algorithms dozens of times every day.

Netflix recommended you a new show that you like a lot! Spotify's "Discover Weekly" playlist somehow knows your taste better than your best friend? Amazon somehoe suggesting exactly what you want to buy--or listening in on your conversations now to know exactly what you want to buy? That's all machine learning. Think of Machine Learning as like teaching a really smart student who seems to have an unforgettable memory and can process information at superhuman speeds. Just as you might learn and recognize the path you take from home to the grocery store, machine learning systems learn patterns by examining vast amounts of data. 

### A Brief History
The dream of creating intelligent machine dates all the way back to the 1940s, but machine learning as we know it really took off in the 1950s when computer scientist Arthur Samuel created a program that could learn to play checkers better than him. The field continuously evolved through several winters and springs of reduced funding following by renewed excitement as new breakthroughs emerged.

But, the real revolution came in the early 2000s when three factors aligned: big data (thanks to everyone on the internet), powerful computing resources (especially graphics cards originally designed for gaming), and intelligent algorithms that could learn the complex patterns. This perfect combination gave us the AI renaissance we're experiencing today. 

### So... how does it work?
Well Vicky! I came here to learn about how it actually works! Every machine learning algorithm follows a similar recipe, called a pipeline. 
1. **Data Collection** - *Data Preparation Phase*. As mentioned earlier, machine learning needs a huge quantity of quality data. This might be millions of photos of cats and dogs, years of stock market prices, or millions of customer reviews. The data represents "past observations"—examples of what we want the computer to learn from. We split the data into two three portions: train, validation, and test. We first train on the "train" set of data.
2. **Pattern Recognition** - *Model Development Phase*. Here's where all the mathy stuff happens. The algorithm examines all that data looking for patterns, much like how you might notice that every time it's cloudy, it tends to rain. These patterns become the "model" or "hypothesis"—essentially the computer's understanding of how the world works.
3. **Training and Testing** - *Model Training and Validation Phase*. The system practices on the "train" set of data and then gets tested on the "validation" set of data that it's "never seen before". Because we only trained on the train set, the validation set is like novel data. This ensures it's actually learned general principles, not just memorized specific examples. We repeat this process multiple times on different validation sets of data and pick the best model.
4. **Making Predictions** - *Deployment and Inference Phase*. Finally, the best trained model that has the best performance can make predictions about completely new, unseen data! Remember when we saved a portion of our data as the "test" set? Here, we can evaluate the generalized model performance on the test set to see how good it would do out in the real world. So, when you show it a new photo, it can accurately identify whether it contains a cat or a dog. And given your viewing history, it'll recommend a suitable new movie.

### If you're not familiar with where Machine Learning can be used...
Here are some examples!
* **Healthcare**: Analyzing medical images to detect cancer earlier than human doctors or designing new drugs.
* **Transportation**: Powering self-driving cars and optimizing traffic flow.
* **Finance**: Detecting fradulent transactions and assessing loan risks. 
* **Entertainment**: Curating personalized content on streaming platforms or generating ads. 
* **Communication**: Translating languages in real-time and filtering spam
* **Retail**: Managing inventory and personalizing shopping experiences
* **Climate**: Designing new materials for solar panels that are more efficient, or managing smart power grids that can predict and adapt to renewable energy fluctuations in real-time.

Of course, at this stage of AI development, most high-risk uses (like healthcare), are accompanied by real professionals to verify if the algorithm correctly predicted something. Or, you just have to have really good customer service.

### Looking Forward
This post will probably be outdated within two years, which really explains how fast this field is moving forward. But, Machine learning isn't just a technological trend. It's becoming the foundation of how we solve complex problems in the 21st century. From climate change research to curating more personalized content for you, ML is reshaping how we understand and interact with our world.

The next time your Spotify suggests a good song or your Google Maps finds a faster route, remember: you're witnessing the result of algorithms that learned from countless examples, constantly improving their understanding of the world, one data point at a time. And if you don't want your data getting stolen from your conversations, there's a way to turn that feature off in settings. 

---
**For technical audiences** //
## Machine Learning: A Systematic Approach to Pattern Recognition and Prediction
Machine learning represents a paradigm shift from traditional rule-based programming to data-driven algorithmic learning. Rather than explicitly programming solutions, we enable systems to automatically improve performance on specific tasks through experience—where experience is quantified as data.

### Some Historical Context
The field emerged from the intersection of statistics, computer science, and cognitive psychology in the mid-20th century. Key milestones include:
* 1943: McCulloch-Pitts neuron model
* 1950s: Perceptron algorithm (Rosenblatt) and early neural networks
* 1960s-1980s: Statistical learning theory development (Vapnik, Chervonenkis)
* 1990s: Support Vector Machines and ensemble methods
* 2000s: Large-scale learning and the "big data" revolution
* 2010s: Deep learning renaissance enabled by GPU computing and large datasets

The mathematical foundations draw heavily from probability theory, optimization, and statistical inference, with core concepts including the bias-variance tradeoff, PAC learning theory, and computational complexity analysis. Another blog will be written about the foundations needed to learn ML!

### Overview of the Pipeline
The ML lifecycle follows a structured methodology:
1. **Data Acquisition and Preprocessing** - *Data Engineering Phase*. First, we have to collect data. To have good quality data, we must gather representative samples from the target distribution. Next, we have to clean the data (e.g. handling missing values, outliers, or inconsistencies). Then, we perform feature engineering, which transforms raw data into meaningful manifestations (such as BMI from height and weight). Then, we split the data into the training, validation, and testing sets. 
2. **Model Selection and Architecture Design** - *Model Development Phase*. If you're here already, you probably already have a hypothesis. We can then choose the model families (linear, tree-based, neural networks, etc.), then define the model architecture (which can also be tuned). Lastly, we have to set the learning rates, regularization terms, or other hyperparameters (that can also be tuned later).
3. **Training and Optimization** - *Model Training Phase*. We have to define a loss function, such as mean squared error (MSE): $\mathcal{L}(y, \hat{y}) = \frac{1}{n}\sum_{i=1}^n(y_i - \hat{y}_i)^2$. Then, we run the model through many iterations and perform optimization by choosing gradient descent variants or tuning hyperparameters. If we see that the model is underfitting, we can increase complexity. And if we see that the model is overfitting, we can regularize. More blogs will come out detailing these steps. 
4. **Validation and Model Selection** - *Model Validation Phase*. To see how well the model can do on unseen data, we perform k-fold cross-validation. We get some evaluation metrics from these and we can determine which model we tried is our best. 
5. **Deployment and Monitoring** - *Production Phase*. When we have a model with a high enough accuracy for the targeted task, we can deploy it. For monitoring the performance, we can try detecting to see if there's a distribution shift. To see which model performs better in practice, we can also perform A/B testing. 

### Core ML Paradigms and Mathematical Formulations
#### Supervised Learning
Given training data ${(x_i, y_i)}_{i=1}^n$ where $x_i \in \mathcal{X}$ and $y_i \in \mathcal{Y}$, learn function $f: \mathcal{X} \rightarrow \mathcal{Y}$ that minimizes expected loss:
$\mathbb{E}_{(x,y) \sim P(X,Y)}[\mathcal{L}(f(x), y)]$.
* Regression: $\mathcal{Y} = \mathbb{R}$, continuous output prediction. (Linear, polynomial, etc.)
* Classification: $\mathcal{Y}$, discrete, categorical prediction. (Logistic regression, k-NN, decision trees, etc.)

#### Unsupervised Learning
Learn structure from data ${x_i}_{i=1}^n$ without labels:
* Clustering: Partition data into meaningful groups. (k-means clustering, GMM, etc.)
* Dimensionality Reduction: Learn lower-dimensional representations. (PCA, kernal approximation, etc.)

#### Self-Supervised Learning
Create supervision signal from data structure itself, enabling learning from large-scale unlabeled data (foundation models, language models).

### Contemporary Applications and Impact
You saw some applications earlier, but they are very basic and have been around for a long time. Here are some recent novel applications:
* **Computer Vision**: Object detection, semantic segmentation, image generation
* **Natural Language Processing**: Language modeling, machine translation, sentiment analysis
* **Robotics**: Perception, planning, control
* **Computational Biology**: Protein folding, drug discovery, genomics
* **Autonomous Systems**: Self-driving vehicles, UAVs, recommendation systems

There are also many computational and statistical considerations, but I'll mention more of that in later blogs :). In the future, we would want more foundational models that are large-scale and pre-trained for transfer learning. We also want more explainable AI: interpretable models for high-stakes applications, such as in the medical field. Most models trained now are for a specific distribution, but we want to have the model more robust, so that's also a future research direction. 

Machine learning continues to evolve rapidly, driven by theoretical advances, computational improvements, and ever-increasing data availability. The field represents one of the most impactful areas of computer science, with applications spanning virtually every domain of human knowledge and activity.

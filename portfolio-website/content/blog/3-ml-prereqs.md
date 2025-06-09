---
title: 'Mathematical Foundations for ML'
date: '2025-06-09'
excerpt: 'Before diving into machine learning algorithms, it is crucial to understand the mathematical foundations that power these techniques. This post covers the essential probability theory and linear algebra concepts you need to master, from random variables and independence to matrix operations and optimization...'
author:
  name: 'Vicky Ye'
  bio: "Current student in UW's CSE 446 Machine Learning class!"
  image: '/images/vy_avatar.jpg'
tags: ['Machine Learning', 'Computer Science']
---

# Mathematical Foundations for Machine Learning

---
**For technical audiences** //
## The Mathematics Behind All the Magic

Machine learning (ML) might seem like magic, but at its core, it's built on solid mathematical foundations. This review covers the core mathematical concepts underlying ML algorithms. Each section identifies where these concepts appear in the ML pipeline and their practical applications.

### Probability Theory

#### Random Variables and Distributions
_ML Lifecycle Stage: Data understanding and Model development_

A **random variable** $X$ is a function that assigns real numbers to outcomes of a random experiment. The **distribution** $\mathbb{P}(X)$ specifies the probability of each possible value. 
* For discrete random variables: $\mathbb{P}(X = x)$ gives the probability mass function. 
* For continuous random variables: $f_X(x)$ gives the probability density function. 

Sampling from a distribution involves drawing values according to the specified probabilities.

<span style="color: rgb(231, 76, 60);">ML Application: Random variables model data generation processes, measurement noise, and prediction uncertainty. Understanding distributions is essential for probabilistic models and Bayesian inference.</span>

#### Independence and Conditional Probability
_ML Lifecycle Stage: Feature engineering and Model development_
Events $U$ and $V$ are independent if: $P(U \cap V) = P(U) \cdot P(V)$

Random variables $X$ and $Y$ are independent if: $P(X = x, Y = y) = P(X = x) \cdot P(Y = y)$

**Conditional probability**: $P(U | V) = \frac{P(U \cap V)}{P(V)}$

For independent events: $P(U | V) = P(U)$

<span style="color: rgb(231, 76, 60);">ML Application: Independence assumptions underlie Naive Bayes classifiers and many generative models. Conditional probability is fundamental to Bayesian networks and probabilistic inference.</span> 

#### Expectation and Variance
_ML Lifecycle Stage: Data understanding and Feature engineering_

**Expected Value ($\mu$)**: $E[X] = \sum_x x \cdot P(X = x)$ for discrete RVs. $E[X] = \int_{-\infty}^{\infty} x \cdot f_X(x) dx$ for continuous RVs.

**Variance ($\sigma^2$)**: $Var(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$

**Standard Deviation ($\sigma$)**: $\sigma = \sqrt{\text{Var}(X)}$

**Median**: The value $m$ such that $P(X \leq m) = 0.5$

<span style="color: rgb(231, 76, 60);">ML Application: These statistics characterize data distributions and model parameters. Variance quantifies prediction uncertainty and appears in regularization terms and loss functions.</span> 

---
### Linear Algebra
#### Matrix Operations
_ML Lifecycle Stage: Data processing and Model implementation_

**Matrix Multiplication**: For $A \in \mathbb{R}^{m \times n}$ and $B \in \mathbb{R}^{n \times p}$: $(AB)_{ij} = \sum_{k = 1}^{n} A_{ik} B_{kj}$
* Associativity: $(AB)C = A(BC)$
* Distributivity: $A(B + C) = AB + AC$
* Non-commutativity: $AB \neq BA$ in general

<span style="color: rgb(231, 76, 60);">ML Application: Matrix multiplication implements linear transformations in neural networks, feature transformartions, and batch processing of data. Essential for efficient computation in deep learning frameworks.</span> 

#### Vector Operations
_ML Lifecycle Stage: Feature engineering & Model training_

**Inner Product** (Dot Product): $\langle x, y \rangle = x^T y = \sum_{i=1}^{n} x_i y_i$

**Matrix-Vector Product**: $Ax = \begin{bmatrix} a_1^T \\ \vdots \\ a_m^T \end{bmatrix} x = \begin{bmatrix} a_1^T x \\ \vdots \\ a_m^T x \end{bmatrix}$

Computational Complexity: Matrix-vector multiplication is $O(mn)$, matrix-matrix multiplication is $O(mnp)$.

<span style="color: rgb(231, 76, 60);">ML Application: Dot products compute similarity measures, attention scores, and linear combinations of features. Matrix-vector products implement forward pass in linear layers and compute predictions. Linear algebra operations also speeds up computation by large factors compared to regular for-loops.</span> 

#### Matrix Decompositions
_ML Lifecycle Stage: Model development & Optimization_

**Linear Independence**: Vectors ${v_1, \ldots, v_k}$ are linearly independent if $\sum_{i=1}^k c_i v_i = 0$ implies $c_i = 0$ for all $i$.

Matrix **Rank**: $\text{rank}(A)$ is the number of linearly independent columns (or rows).

Matrix **Inverse**: For square matrix $A$, if $\det(A) \neq 0$, then $A^{-1}$ exists and $AA^{-1} = I$.

**Determinant**: $\det(A)$ measures volume scaling factor of linear transformation $A$.

<span style="color: rgb(231, 76, 60);">ML Application: Rank determines solution uniqueness in linear systems. Matrix inverses appear in closed-form solutions (e.g., normal equations). Determinants identify singular matrices that cause numerical instability.</span>

#### Eigendecomposition
_ML Lifecycle Stage: Model development & Optimization_

For square matrix $A$, if $Av = \lambda v$ for non-zero vector $v$, then:
* $\lambda$ is an eigenvalue
* $v$ is an eigenvector

Characteristic Equation: $\det(A - \lambda I) = 0$

Spectral Theorem: For symmetric matrix $A$: $A = Q\Lambda Q^T$, where $Q$ contains orthonormal eigenvectors and $\Lambda$ is diagonal with eigenvalues.

<span style="color: rgb(231, 76, 60);">ML Application: Eigendecomposition enables Principal Component Analysis (PCA) for dimensionality reduction. Eigenvalues indicate directions of maximum variance in data. Used in spectral clustering and matrix factorization methods.</span>

#### Norms and Metrics
_ML Lifecycle Stage: Data processing & Model evaluation_

Vector Norms:
* $L_1$ norm: $|x|_1 = \sum{i=1}^{n} |x_i|$
* $L_2$ norm: $|x|_2 = \sqrt{\sum{i=1}^{n} x_i^2}$
* $L_\infty$ norm: $|x|_\infty = \max_i |x_i|$

Matrix Norms:
* Frobenius norm: $|A|_F = \sqrt{\sum{i,j} A_{ij}^2}$
* Spectral norm: $|A|_2 = \max{|x|=1} |Ax|$

<span style="color: rgb(231, 76, 60);">ML Application: Norms define distance metrics for similarity measures and clustering. L1 regularization induces sparsity (Lasso), L2 regularization controls model complexity (Ridge). Essential for optimization convergence analysis.</span>

### Calculus and Optimization
#### Multivariate Calculus
_ML Lifecycle Stage: Model training & Optimization_

**Gradient**: For function $f: \mathbb{R}^n \to \mathbb{R}$: $\nabla f(x) = \begin{bmatrix} \frac{\partial f}{\partial x_1} \\ \vdots \\ \frac{\partial f}{\partial x_n} \end{bmatrix}$​​​

Chain Rule: For composite function $f(g(x))$: $\frac{df}{dx} = \frac{df}{dg} \cdot \frac{dg}{dx}$

Hessian Matrix: Matrix of second partial derivatives: $H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$

<span style="color: rgb(231, 76, 60);">ML Application: Gradients drive optimization algorithms (SGD, Adam). Chain rule enables backpropagation in neural networks. Hessian provides curvature information for second-order optimization methods.</span>

#### Optimization Theory
_ML Lifecycle Stage: Model training & Optimization_

Quadratic Forms: For symmetric matrix $A$: $f(x) = x^T A x + b^T x + c$

Positive Semidefinite: Matrix $A$ is PSD if $x^T A x \geq 0$ for all $x$.
* Ensures convex quadratic functions
* Eigenvalues are non-negative

Convexity: Function $f$ is convex if $f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y)$ for $\lambda \in [0,1]$.

<span style="color: #e74c3c;">ML Application: Quadratic forms appear in regularization terms and loss functions. PSD matrices ensure convex optimization problems with guaranteed global optima. Convexity determines optimization tractability.</span>

---
There is a lot more to be covered, but that's just what we covered in my Machine Learning course I took at UW. As a summary, these mathematical foundations connect throughout ML systems:
1. Data Preprocessing: Linear algebra for transformations, probability for understanding distributions
2. Feature Engineering: Norms for similarity, linear independence for feature selection
3. Model Training: Optimization theory for parameter updates, gradients for backpropagation
4. Model Evaluation: Probability for uncertainty quantification, norms for error metrics
5. Inference: Matrix operations for efficient computation, probabilistic models for predictions

Mastery or at least familiarity of these concepts allows for understanding of algorithm design choices, computational complexity, and theoretical guarantees in machine learning systems.


Some good textbooks to freshen up on the math for ML: [Linear Algebra Review](https://www.cs.cmu.edu/~zkolter/course/15-884/linalg-review.pdf), [The Matrix Cookbook](https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf). 

---
**Next up will be a blog post about the first ML algorithm: MLE!**
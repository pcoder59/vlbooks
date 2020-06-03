Vue.component('category-selected', {
    template: `
    <article id="selectedCategory">
        
    </article>
    `
})

Vue.component('category-display', {
    template: `
    <section class="container">
        <category-selected></category-selected>
    </section>
    `
})

Vue.component('categories-columns', {
    template: `
    <section class="card-columns" v-on:click="hide" v-bind:style={display:displayCategory}>
        <article v-for="category in categories" class="card">
            <div class="card-body text-center">
                <p>{{ category }}</p>
            </div>
        </article>
    </section>
    `,
    data: function() {
        return {
            categories: ["Action and Adventure", "Children's", "Comic Book", "Crime", "Drama", "Fantasy", "Graphic Novel", "Historical Fiction", "Horror", "Mystery", "Picture Book", "Poetry", "Political Thriller", "Romance", "Satire", "Science Fiction", "Short Story", "Suspense", "Thriller", "Young Adult", "Art", "Autobiography", "Biography", "Cookbook", "Diary", "Dictionary", "Encyclopedia", "Guide", "Health", "History", "Journal", "Math", "Memoir", "Prayer", "Religion and Spirituality", "Textbook", "Science", "Self-Help", "Travel", "True Crime"],
            displayCategory: "block",
        }
    },
    methods: {
        hide: function() {
            this.displayCategory = "none"
        }
    },
})

Vue.component('header-section', {
    template: `
    <div>
        <header class="jumbotron text-center">
            <h1>VLBOOKS</h1>
            <p>We Love Books!</p>
        </header>
        <categories-columns></categories-columns>
    </div>
    `
})

var app = new Vue({
    el: "#app",
    data: {}
})
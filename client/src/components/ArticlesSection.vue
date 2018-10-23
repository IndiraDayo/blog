<template>
    <!-- Page Content -->
    <div class="container">
      <div class="row justify-content-between my-margin-1">
        <div class=" card col-lg-3 my-sticky my-flex">

          <div class="card-body">
            <!-- {{JSON.stringify(user.image}} -->
            <img v-bind:src="user.image" class="cover"  v-if="user.image"/>
            <img v-else-if="!user.image" src="../assets/Original-Facebook-Geek-Profile-Avatar-1.jpg" class="cover"  />
            <p class="my-heading">{{user.name}}</p>

              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createArticleModal">
                + Article
              </button>
            <hr>
            <input type="text" class="form-control" placeholder="search article">

            <p class="my-heading">My Articles</p>
            <div class="my-height-2">
              <div v-for="(article, index) in myarticles" v-bind:key="index">
                <button type="button" data-toggle="modal" data-target="#editArticleModal" v-on:click="showarticle(article._id)"  class="btn">{{article.title}}</button>
              </div>
              
              <!-- <button>Submit Lorem</button>
              <button>Submit Lorem khgjgjg jhgjhgjhgjg gjhgjhgjhg</button>
              <button>Submit Lorem</button>
              <button>Submit Lorem</button>
              <button class="btn">Submit sdgsdgsdgLorem</button>
              <button>Submit Lorem</button>
              <button>Submit Lorem</button>
              <button>Submit Lorem</button>
              <button>Submit Lorem</button> -->
            </div>
            
             
                
          </div>

        </div>
        <!-- /.col-lg-3 -->

        <div class="col-lg-8">
          <div class="row justify-content-md-center my-height-1" >
          
            <div v-for="(article,index) in allarticles" v-bind:key="index" class="card shadow my-margin-3 my-article">
              <img class="card-img-top cover-blog" v-bind:src="article.image" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{article.title}}</h5>
                <p>by: {{article.author_id.name}}</p>
                <button type="button" data-toggle="modal" data-target="#articleModal" v-on:click="showarticle(article._id)">Read Article</button>
              </div>

            </div>

          </div>
        </div>

        <!-- modal create article -->
        <div class="modal fade" id="createArticleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              
              <div class="modal-body ">
                  <p class="my-heading">Create Article</p>
                  <hr>
                  <form class="form">
                    <p>title:</p>
                    <input v-model="addtitle" type="text" class="form-control" placeholder="Article Title" required>

                    <p>about:</p>
                    <textarea v-model="adddescription" class="form-control" id="message-text" required></textarea>
                    <hr>
                    <p>image link:</p>
                    <input v-model="addimage" type="text" class="form-control" placeholder="https://">
                    <hr>
                    <button v-on:click="addarticle" type="submit" class="btn btn-primary" data-dismiss="modal">Create Article</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
        <!-- end create modal -->

        <!-- modal article -->
        <div class="modal fade" id="articleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              
              <div class="modal-body ">
                  <p class="my-heading">{{singlearticle.title}}</p>
                    <img class="my-article-image" v-bind:src="singlearticle.image" alt="Card image cap">
                    <p>{{singlearticle.description}}</p>
                    <hr>
                    <p>comment:</p>
                    <input v-model="addimage" type="text" class="form-control">
                    <hr>
                    <button type="submit" class="btn btn-primary">Add Comment</button>

              </div>
            </div>
          </div>
        </div>
        <!-- end modal article -->

        <!-- edit article modal -->
        <div class="modal fade" id="editArticleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              
              <div class="modal-body ">
                  <p class="my-heading">Save Article</p>
                  <hr>
                  <form class="form">
                    <p>title:</p>
                    <input v-model="addtitle" type="text" class="form-control" v-bind:placeholder="singlearticle.title" required>

                    <p>about:</p>
                    <textarea v-model="adddescription" class="form-control" id="message-text" v-bind:placeholder="singlearticle.description" required></textarea>
                    <hr>
                    <p>image link:</p>
                    <input v-model="addimage" type="text" class="form-control" v-bind:placeholder="singlearticle.image">
                    <hr>
                    <button v-on:click="addarticle" type="submit" class="btn btn-primary" data-dismiss="modal">Save Article</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
        <!-- end edit article modal -->
        
      </div>

      

    </div>
    <!-- /.container -->
</template>


<script>



export default {
  name: 'ArticlesSection',
  props: ['user'],
  data() {
    return {
      allarticles: [],
      myarticles: [],
      singlearticle: {},
      addtitle: '',
      adddescription: '',
      addimage: ''
    }
  },
  methods: {
    getallarticles() {

      axios({
        method: 'GET',
        url: 'http://localhost:3000/article/all'
      })
        .then( articles => {
                 
          this.allarticles = articles.data.data
          console.log('ini di article section get all articles' + JSON.stringify(this.allarticles));  
        })
        .catch(err => {
          console.log('error di article section get all articles' + err);
        })
    },
    getmyarticles() {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/article/mine',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(articles => {
          this.myarticles = articles.data.data
          console.log('ini di get my articles' + JSON.stringify(articles));
        })
        .catch(err => {
          console.log('eror di get my articles' + err);
          
        })
    },
    showarticle(id) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/article/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(article => {
          this.singlearticle = article.data.data
          console.log('ini satu article ' + JSON.stringify(article));
          
        })
        .catch(err => {
          console.log('ga bisa nge get satu article' + err);
          
        })

    },
    addarticle() {
      let self = this
      // console.log('');
      // console.log(self.addtitle)
      // console.log(self.adddescription);
      // console.log(self.addimage);
      axios({
        method: 'POST',
        url: 'http://localhost:3000/article/add',
        data: {
          title: self.addtitle,
          description: self.adddescription,
          image: self.addimage
        }
      })
        .then( response => {
          console.log('ini di buat article', JSON.stringify(response));
          
        })
        .catch(err => {
          console.log('err di buat article', err);
          
        })
    }
  },
  created() {
    this.getallarticles()
    this.getmyarticles()
  }
}
</script>


<style scoped>
/* .row {
  margin-top: -5%;
  margin-bottom: 5%;
} */
.card {
  width: 95%;
  border: 0;
}
.form-control {
  width: 95%;
  
}
.my-article-image {
  width: 100%;
  margin-bottom: 50px;
}
.my-width-1 {
  width: 80%;
}

.my-height-1 {
  height: 790px;
  overflow: scroll;
}
.my-height-2 {
  height: 260px;
  overflow: scroll;
}

.my-article {
  height: 350px;
  transition: transform 0.2s;
}

.my-article:hover {
  transform: scale(1.02);
}

.my-heading {
  width: 100%;
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.my-margin-1 {
  margin-top: -6%;
}
.my-margin-2 {
  margin-top: 5%;
  margin-bottom: 5%;
}

.my-margin-3 {
  margin-bottom: 5%;
}

.my-flex {
  height: fit-content;
}

.my-sticky {
  position: sticky !important;
}
.cover {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.card-img-top {
  width: 100%;
  height: 200px;
}

.cover-blog {
  object-fit: cover;
}

input:focus, textarea:focus {
  background-color: white;
  width: 100%;
  color: #2fad88;
}

textarea {
  margin: auto;
  height: 300px;
}

button {
  line-height: 20px;
  appearance: none;
  outline: 0;
  background: #20c284;
  border: 0;
  padding: 10px 15px;
  color: rgb(255, 255, 255);
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
  margin-bottom: 5px;
}
button:hover {
  background: #00a59d;
}

.btn {
  cursor: pointer;
}
</style>

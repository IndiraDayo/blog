<template>
    <!-- Page Content -->
    <div class="container">
      <div class="row justify-content-between my-margin-1">
        <div class=" card col-lg-3 my-sticky my-flex">

          <div class="card-body">
            
            <img src="https://avatars1.githubusercontent.com/u/37532696?s=400&u=0c16141d4563262b053a7a8fb94e73c1a7207e6b&v=4" class="cover"  />
            <p class="my-heading">Indira Dayo</p>
            <!-- <h4>Search</h4> -->
            <!-- <div class="list-group"> -->
              <!-- <form> -->
                
                  
                  <!-- <button type="button" data-toggle="modal" data-target="#createArticleModal" >+Article</button> -->
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    + Article
                  </button>
            
              <!-- </form> -->
            <!-- </div> -->
            <hr>
            <input type="text" class="form-control" placeholder="search article">

            <!-- <hr>   -->
            <p class="my-heading">My Articles</p>
            <div class="my-height-2">
              <button class="btn">Submit sdgsdgsdgLorem</button>
              <button>Submit Lorem</button>
              <button>Submit Lorem khgjgjg jhgjhgjhgjg gjhgjhgjhg</button>
              <button>Submit Lorem</button>
              <button>Submit Lorem</button>
              <button class="btn">Submit sdgsdgsdgLorem</button>
              <button>Submit Lorem</button>
              <button>Submit Lorem</button>
              <button>Submit Lorem</button>
              <button>Submit Lorem</button>
            </div>
            
             
                
          </div>

        </div>
        <!-- /.col-lg-3 -->

        <div class="col-lg-8">
          <div class="row justify-content-md-center my-height-1" >
          
            <div class="card shadow my-margin-3 my-article">
              <img class="card-img-top cover-blog" src="http://cdn2.tstatic.net/pekanbaru/foto/bank/images/ilustrasi-harimau_20160729_214055.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Penemuan Species Harimau Baru</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum ipsam aliquid temporibus rem molestiae nihil iure omnis, aut neque repellendus necessitatibus, repudiandae dolorem, minus reprehenderit tempora. Soluta, quidem porro.</p>
                <button href="/home">Read Article</button>
              </div>
            </div>

            <div class="card shadow my-margin-3 my-article">
              <img class="card-img-top cover-blog" src="https://images6.alphacoders.com/543/543355.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Keuntungan Mememelihara Cockatiel</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum ipsam aliquid temporibus rem molestiae nihil iure omnis, aut neque repellendus necessitatibus, repudiandae dolorem, minus reprehenderit tempora. Soluta, quidem porro.</p>
                <button href="/home">Read Article</button>
              </div>
            </div>

            
          </div>
        </div>

        <!-- modal create article -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            
            <div class="modal-body ">
                <p class="my-heading">Create Article</p>
                <hr>
                <form class="form">
                  <p>title:</p>
                  <input type="text" class="form-control" placeholder="Article Title" required>

                  <p>about:</p>
                  <textarea class="form-control" id="message-text" required></textarea>
                  <hr>
                  <p>image link:</p>
                  <input type="text" class="form-control" placeholder="https://">
                  <hr>
                  <button type="submit" class="btn btn-primary">Create Article</button>
                </form>
            </div>
          </div>
        </div>
        </div>
      <!-- end create modal -->

      </div>

      

    </div>
    <!-- /.container -->
</template>


<script>
export default {
    name: 'ArticlesSection'
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
  height: 400px;
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
  margin-bottom: 3%;
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

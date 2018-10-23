<template>
    <div>
        <div class="wrapper">

            <div class="container">
                <Navbar></Navbar>
                <ArticlesSection v-bind:user="user"></ArticlesSection>
            </div>

        </div>
    </div>  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ArticlesSection from '@/components/ArticlesSection.vue'

export default {
    components: {
        Navbar,
        ArticlesSection
    },
    data() {
        return {
            token: localStorage.getItem('token'),
            user: {
                _id: '',
                name: '',
                email: '',
                password: '',
                image: '',
                articles: [],
                comments: []
            },
            article: {
                title: '',
                description: '',
                image: '',
                author_id: '',
                like: '',
                dislike: '',
                comments: []
            },
            comment: {
                user_comment: '',
                user_id: '',
                article_id: ''
            }

            
        }
        
    },
    methods: {
        getUserData() {
            axios({
                method: 'GET',
                url: 'http://localhost:3000/data',
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(data => {
                    this.user._id = data.data.data._id
                    this.user.name = data.data.data.name
                    this.user.email = data.data.data.email
                    this.user.image = data.data.data.image

                    console.log('ini data dari homepage ' + JSON.stringify(data));
                    console.log(this.user);
                    
                    this.$emit('getuserdata', data)
                
                })
                .catch(err => {
                    console.log(err);
                
                })
            }
    },
    created() {
        if(this.token == null) {
            this.$router.push({name: 'Loginpage'})
        } else {
            this.getUserData()
        }

    },
    watch: {
        token(val) {
            if(val == null) {
                localStorage.removeItem('token')
                this.$router.push({name: 'Loginpage'})
            }
        }
    }
}
</script>

<template>
    <div>
        <div class="wrapper">
            <div class="container">
                <Navbar></Navbar>
                <ArticlesSection></ArticlesSection>
            </div>
            
            <!-- <ul class="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul> -->
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
    }
}
</script>

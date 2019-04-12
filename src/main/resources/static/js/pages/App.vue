<template>
    <v-app id="app" dark>
        <toolbar/>
        <v-content>
            <v-container fluid fill-height>
                <router-view/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Toolbar from '_includes/Toolbar.vue'
    import SignIn from 'components/SigIn.vue'

    export default {
        components: {
            Toolbar, SignIn
        },
    }
</script>
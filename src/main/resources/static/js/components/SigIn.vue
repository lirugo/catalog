<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md3>
            <v-card class="elevation-12">
                <v-toolbar dark>
                    <v-toolbar-title>Login form</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                        <v-btn
                                icon
                                target="_blank"
                                slot="activator"
                                @click="sigIn()"
                        >
                            <v-icon>send</v-icon>
                        </v-btn>
                        <span>Sign In</span>
                    </v-tooltip>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field prepend-icon="person" name="login" label="Login" type="text" autocomplete="off" v-model="login"></v-text-field>
                        <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" autocomplete="off" v-model="password"></v-text-field>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data(){
            return {
                login: null,
                password: null,
            }
        },
        methods: {
            sigIn(){
                console.log(this.login + this.password)
            }
        },
    }
</script>
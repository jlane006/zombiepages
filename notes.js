async login() {
  try {
    const { data } = await axios.post('/wp-json/simple-jwt-authentication/v1/token', {
      username: 'jacelane',
      password: 'ticklishsalamander'
    })

    const { data } = await axios.post('/wp-json/simple-jwt-authentication/v1/token', this.form)

    this.user = data

    this.form.username = ''
    this.form.password = ''
  } catch (error) {
    console.log(error)
    this.handleToast('Nope! Try again.')
  }
} 
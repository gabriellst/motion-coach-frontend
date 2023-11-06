export class ApiGateway {
	private readonly apiUrl: string = 'http://127.0.0.1:8000'
	async analyze(video: File) {
		const formData = new FormData()
		formData.append('video', video)

		const response = await fetch(`${this.apiUrl}/analyze`, {
			method: 'POST',
			body: formData,
		})
		return await response.json()
	}
}

const token = "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";
let imgdescription = document.getElementById("img-description");
let img = document.getElementById("image");
let btn=document.getElementById("submit");

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Rajesh2004/text-to-image-ai-model",
		{
			headers: { Authorization: "Bearer ${token}" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}
query({"inputs": "Astronaut riding a horse"}).then((response) => {
	// Use image
});
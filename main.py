from litellm import completion
from dotenv import load_dotenv
import os

# Load .env file
load_dotenv()

# Access secret keys
api_key = os.environ.get("GLOQ_API_KEY")

os.environ['GROQ_API_KEY'] = api_key
response = completion(
    model="groq/llama-3.3-70b-versatile", 
    messages=[
       {"role": "user", "content": "hello from litellm"}
   ],
)

print(response)
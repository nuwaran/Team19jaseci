from litellm import completion
import os

os.environ['GROQ_API_KEY'] = "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"
response = completion(
    model="groq/llama-3.3-70b-versatile", 
    messages=[
       {"role": "user", "content": "hello from litellm"}
   ],
)

print(response)
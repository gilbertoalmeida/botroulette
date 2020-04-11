from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import numpy as np

# Create a new instance of a ChatBot
bot = ChatBot(
    'Example Bot',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    logic_adapters=[
        {
            'import_path': 'chatterbot.logic.BestMatch',
            'default_response': 'I am sorry, but I do not understand.',
            'maximum_similarity_threshold': 0.90
        }
    ]
)

trainer = ListTrainer(bot)





# Train the chat bot with a few responses

# Get a response for some unexpected input
response = bot.get_response('Hi')
print(response)

from chatterbot.trainers import ChatterBotCorpusTrainer
chatbot = ChatBot('Training Example')

trainer = ChatterBotCorpusTrainer(chatbot)

trainer.train(
    "chatterbot.corpus.english"
)
trainer.train(
    "chatterbot.corpus.english.greetings",
    "chatterbot.corpus.english.conversations",
    "chatterbot.corpus.english.food",
#    "chatterbot.corpus.english.trivia",
    "chatterbot.corpus.english.humor",
    "chatterbot.corpus.english.emotion",
    "chatterbot.corpus.english.history",
    "chatterbot.corpus.english.psychology",
    "chatterbot.corpus.english.money"
)
#trainer.train(df1)

chatbot.get_response('are you hungry?')
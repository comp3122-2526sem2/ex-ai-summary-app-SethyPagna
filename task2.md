## Section 6: Supabase Object Store
Supabase is an open-source Firebase alternative that provides developers with a complete backend-as-a-service platform centered around PostgreSQL, a powerful relational database system offering full SQL capabilities, real-time subscriptions, and robust extensions for scalable data management. Its object storage is an S3-compatible service designed for storing and serving files like images, videos, and user-generated content.

Website: https://supabase.com/

**Requirements**:
- Build a document upload and file management system powered by Supabase. The backend will include API endpoints to interact with Supabse.
- **Note:** The detailed requirement will be discussed in week 4 lecture.
- Make regular commits to the repository and push the update to Github.
- Capture and paste the screenshots of your steps during development and how you test the app. Show a screenshot of the documents stored in your Supabase Object Database.

Test the app in your local development environment, then deploy the app to Vercel and ensure all functionality works as expected in the deployed environment.

**Steps with major screenshots:**

> [your steps and screenshots go here]
Bascially, i use vite framework, with supabase and vercel.(make sure github is public before deployment)

For SupaBase:
1. You just need to login free account, setup as usual, create project. 
2. In that project, copy supabase_url and save it somewhere:
![supabase url](image-task-2/supabase_url.png)
3. Afterwards, navigate to 'ProjectSettings:
![ProjectSettings](image-task-2/supabase-projectsettings.png)
4. In 'ProjectSettings', click 'API Keys', 
![API KEY](image-task-2/API Keys.png)
5. Then go to 'legacy anon,...' then copy the ANON public and save it somewhere:
![anon public](image-task-2/anon public.png)

Afterwards, in the github repository, for 'ai-summary-app' folder, in 'app', 
1. Make sure .node_module and its dependencies are installed including vite.
![node modules](image-task-2/node_modules.png)
If not, in terminal the terminal of ai-summary-app/app directory enter this command:node install

2. in .env, add the variables below with your respective values: 
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvaG9xZG10bnZnbHBya3d4bWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MjY5MTYsImV4cCI6MjA4NzEwMjkxNn0.boks7yBcy74O5wKrFYtCD2d2qFFWWxsMMtVqnA9W6gk
VITE_SITE_URL=http://localhost:5173/
VITE_OPENROUTER_API_KEY=paste_the_OPENROUTER_API_Key_here
VITE_SUPABASE_URL=https://zohoqdmtnvglprkwxmih.supabase.co

3. For the VITE_OPENROUTER_API_KEY, you can put your own here, no need to pay or anything, as the ai model in my app are all free models in openrouter. If you don't want the hassle, you can instead use my deployed link to access the fully developed webapp: https://ex-ai-summary-app-sethypagna.vercel.app/

4. Now, for the local environment, after having all the values in .env, you can in the ai-summary-app/app directory run the program using this command: npm run dev
![npm run dev](image-task-2/npm run dev.png)

**Note:** If there is any error, like vite permission denied, you can use these commands:
chmod +x node_modules/.bin/vite
rm -rf node_modules
npm install
npm run dev


5. Next, you can click on the given local link and login to the website. 
6. I have implemented a user signup/sign in system so users can save their progress and not have information shared with other users.
For testing, you can login with the readied account. 
username: user
or email: user@gmail.cp,
password: user123
![local-website](image-task-2/local_website.png)

**Note**: The account works for both local and deployed link as they are connected to one supabase.
        -you can also create your own accounts and then sign in.


For vercel, here's my steps to deploy the website using the github repository:

1. Assuming you logged in to your vercel account, you find and click on 'Add New...' 
then choose 'Project':
![vercel addnew](image-task-2/vercel-addnew.png)
2. Afterwards, you choose the github repository, which in this case is 'comp3122-2526sem2/ex-ai-summary-app-sethypagna'
Then click 'Import':
**Note**: in the vercel free tier, your github repository needs to be 'public' to deploy.
![import github-repo](<image-task-2/import github repo.png>)
3. This is what you'll see:
![deployment process](<image-task-2/deployment process.png>)
4. Next since our repository has many directories, in the section 'Root Directory' choose 'app' folder which is in the 'ai-summary-app' folder and click 'Continue':
![Root Directory](<image-task-2/root directory.png>)
5. Next, copy and paste the environment variables from your env. folder to the environment variables section. 
6. Afterwards, click 'Deploy' and Continue to Dashboard. Here's the deployed link: https://ex-ai-summary-app-sethypagna.vercel.app/



## Section 7: AI Summary for documents
**Requirements:**  
- **Note:** The detailed requirement will be discussed in week 4 lecture.
- Make regular commits to the repository and push the update to Github.
- Capture and paste the screenshots of your steps during development and how you test the app.
- The app should be mobile-friendly and have a responsive design.
- **Important:** You should securely handlle your API keys when pushing your code to GitHub and deploying your app to the production.
- When testing your app, try to explore some tricky and edge test cases that AI may miss. AI can help generate basic test cases, but it's the human expertise to  to think of the edge and tricky test cases that AI cannot be replace. 

Test the app in your local development environment, then deploy the app to Vercel and ensure all functionality works as expected in the deployed environment. 


**Steps with major screenshots:**

> [your steps and screenshots go here]
Afterwards, in the github repository, for 'ai-summary-app' folder, in 'app', 
1. Make sure .node_module and its dependencies are installed including vite.
![node modules](image-task-2/node_modules.png)
If not, in terminal the terminal of ai-summary-app/app directory enter this command:node install

2. in .env, add the variables below with your respective values: 
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvaG9xZG10bnZnbHBya3d4bWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MjY5MTYsImV4cCI6MjA4NzEwMjkxNn0.boks7yBcy74O5wKrFYtCD2d2qFFWWxsMMtVqnA9W6gk
VITE_OPENROUTER_API_KEY=paste_the_OPENROUTER_API_Key_here
VITE_SUPABASE_URL=https://zohoqdmtnvglprkwxmih.supabase.co

3. For the VITE_OPENROUTER_API_KEY, you can put your own here, no need to pay or anything, as the ai model in my app are all free models in openrouter. If you don't want the hassle, you can instead use my deployed link to access the fully developed webapp: https://ex-ai-summary-app-sethypagna.vercel.app/

4. Now, for the local environment, after having all the values in .env, you can in the ai-summary-app/app directory run the program using this command: npm run dev
![npm run dev](image-task-2/npm run dev.png)

**Note:** If there is any error, like vite permission denied, you can use these commands:
chmod +x node_modules/.bin/vite
rm -rf node_modules
npm install
npm run dev


5. Next, you can click on the given local link and login to the website. 
6. I have implemented a user signup/sign in system so users can save their progress and not have information shared with other users.
For testing, you can login with the readied account. 
username: user
or email: user@gmail.cp,
password: user123
![local-website](image-task-2/local_website.png)

**Note**: The account works for both local and deployed link as they are connected to one supabase.
        -you can also create your own accounts and then sign in.


**Note**: below are a screesnshot of my past commits in another repository, the commits in this repository starts from the last commit of the other repository. 
![other repository](<image-task-2/other repository.png>)
-I have communicated with the professor and got his greenlight to move the finished app to this current repository.



## Section 8: Database Integration with Supabase  
**Requirements:**  
- Enhance the app to integrate with the Postgres database in Supabase to store the information about the documents and the AI generated summary.
- Make regular commits to the repository and push the update to Github.
- Capture and paste the screenshots of your steps during development and how you test the app.. Show a screenshot of the data stored in your Supabase Postgres Database.

Test the app in your local development environment, then deploy the app to Vercel and ensure all functionality works as expected in the deployed environment.

**Steps with major screenshots:**
> [your steps and screenshots go here]
1. To integrate the various data to supabase, i created the following tables for users, chat_messages, projects, and documents for database:
![user](image-task-2/user_table_supabase.png)
![projects, documents, chat_messages](image-task-2/projects,documents,chatmessages.png)

For Storage, i created a bucket called 'app-files':
![app-files bucket](image-task-2/app-files.png)
![app-files-policy](<image-task-2/app-files policy.png>)

## Section 9: Additional Features [OPTIONAL]
Implement at least one additional features that you think is useful that can better differentiate your app from others. Describe the feature that you have implemented and provide a screenshot of your app with the new feature.

> [Description of your additional features with screenshot goes here]
1. Responsiveness and Dark Mode: The app is responsive across all devices, providing a smooth experience on desktops, tablets, and mobile phones. Users can toggle between light and dark modes, enhancing comfort during usage.
2. Allow users to sign up, log in, and log out effortlessly. The app securely connects to Supabase for user management.
3. Dashboard and Sidebar: The user dashboard features a sidebar for various settings including:
  New Project: Create and manage tasks effectively.
  Projects: Access all ongoing projects.
  File History: Easy access to previously uploaded files.
4. Chat Feature: Engage with a chat feature where users can ask questions regarding their files. You have diverse options of AI models to answer your needs. The interface provides suggested questions to enhance user interactions and streamline responses.
5. Database Integration: Information is stored in Supabase using prepared tables to ensure data integrity and easy retrieval.
6. File Uploads: All uploaded files are managed within the "app-files" bucket in Supabase, enabling efficient file storage and access.
7. Readability Enhancements: Users can customize readability settings, controlling:
  Font sizes
  Line heights
  Letter spacing
This ensures a tailored reading experience for summaries and chat features.

![design](image-task-2/design.png)
![Settings](<image-task-2/settings part 1.png>)
![Settings part 2](<image-task-2/settings part 2.png>)
![File History](<image-task-2/File History.png>)
![Project panel with upload, summaries, chat](<image-task-2/Project Panel.png>)
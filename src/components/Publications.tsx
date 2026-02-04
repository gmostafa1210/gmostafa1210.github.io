import { FileText, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Improve the Sentiment of Bengali Language Texts with Stopword Removal",
    doi: "10.1145/3723178.3723233",
    doiUrl: "https://doi.org/10.1145/3723178.3723233",
    date: "October 17, 2024",
    venue: "3rd International Conference on Computing Advancements (ICCA 2024)",
    publisher: "ACM",
    pages: "414-422",
    pdfUrl: "/files/mostafa2024.pdf",
    researchGateUrl: "https://www.researchgate.net/publication/384667789_Improve_the_Sentiment_of_Bengali_Language_Texts_with_Stopword_Removal",
  },
  {
    title: "Detecting Lung Cancer with Federated and Transfer Learning",
    doi: "10.1109/ICCIT60459.2023.10441256",
    doiUrl: "https://doi.org/10.1109/ICCIT60459.2023.10441256",
    date: "February 27, 2024",
    venue: "26th International Conference on Computer and Information Technology (ICCIT 2023)",
    publisher: "IEEE",
    pages: "1-6",
    pdfUrl: "/files/mostafa2023.pdf",
    researchGateUrl: "https://www.researchgate.net/publication/378537154_Detecting_Lung_Cancer_with_Federated_and_Transfer_Learning",
  },
  {
    title: "Investigation of Different Machine Learning Algorithms to Determine Human Sentiment Using Twitter Data",
    doi: "10.5815/ijitcs.2021.02.04",
    doiUrl: "https://doi.org/10.5815/ijitcs.2021.02.04",
    date: "April 08, 2021",
    venue: "International Journal of Information Technology and Computer Science (IJITCS), Vol.13, No.2",
    publisher: "MECS Press",
    pages: "38-48",
    pdfUrl: "/files/mostafa2021.pdf",
    researchGateUrl: "https://www.researchgate.net/publication/350725872_Investigation_of_Different_Machine_Learning_Algorithms_to_Determine_Human_Sentiment_Using_Twitter_Data",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-secondary/30">
      <div className="container max-w-4xl">
        <h2 className="section-heading">Publications</h2>

        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <FileText size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground leading-tight mb-2">
                    {pub.title}
                  </h3>
                  
                  <div className="space-y-1 text-sm text-muted-foreground mb-4">
                    <p>
                      <span className="text-primary">{pub.venue}</span>
                    </p>
                    <p>
                      Publisher: {pub.publisher} | Pages: {pub.pages} | {pub.date}
                    </p>
                    <p className="font-mono text-xs">
                      DOI:{" "}
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {pub.doi}
                      </a>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    >
                      <a
                        href={pub.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen size={14} className="mr-1" />
                        Read Paper
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    >
                      <a
                        href={pub.researchGateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        ResearchGate
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

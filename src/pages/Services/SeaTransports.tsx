import { useLangContext } from "../../hooks/useLangContext";

const enText = (
  <div className="text-pretty">
    <div>
      With regular shipments to and from all international commercial ports, we
      offer the most economical options for partial and entire loads, using
      every type of containers.
    </div>
    <br />
    <div>
      The special staffed shipping department undertakes the processing of the
      import or export. From the receipt of goods, the storage and customs
      formalities and the direct delivery to the point where the client
      indicates us.
    </div>
    <br />
    <div>
      The number of correspondents we have worldwide, enables us to organize
      properly and seamlessly monitor every move of your cargo to its final
      destination. With the most modern cargo tracking systems we provide any
      information you may need.
    </div>
    <br />
    <div>
      Apart from the competitive rates, we also pay special attention finding
      alternative solutions to issues regarding the departures and the transit
      time of the liner. So you will always be sure that your cargo will be
      there when you need to.
    </div>
    <br />
  </div>
);

const grText = (
  <div className="text-pretty">
    <div>
      Με τακτικές αποστολές από και προς όλα τα διεθνή εμπορικά λιμάνια, εμείς
      προσφέρουν τις πιο οικονομικές επιλογές για μερικά και ολόκληρα φορτία,
      χρησιμοποιώντας κάθε είδους δοχεία.
    </div>
    <br />
    <div>
      Το ειδικά στελεχωμένο τμήμα ναυτιλίας αναλαμβάνει την επεξεργασία των
      εισαγωγή ή εξαγωγή. Από την παραλαβή των εμπορευμάτων, την αποθήκευση και
      το τελωνείο διατυπώσεις και την απευθείας παράδοση στο σημείο όπου ο
      πελάτης μας υποδεικνύει.
    </div>
    <br />
    <div>
      Ο αριθμός των ανταποκριτών που έχουμε παγκοσμίως, μας δίνει τη δυνατότητα
      να οργανωθούμε παρακολουθείτε σωστά και απρόσκοπτα κάθε μετακίνηση του
      φορτίου σας μέχρι την τελική της προορισμός. Με τα πιο σύγχρονα συστήματα
      εντοπισμού φορτίου παρέχουμε οποιαδήποτε πληροφορίες που μπορεί να
      χρειαστείτε.
    </div>
    <br />
    <div>
      Εκτός από τις ανταγωνιστικές τιμές, δίνουμε ιδιαίτερη προσοχή και στην
      εύρεση εναλλακτικές λύσεις σε θέματα που αφορούν τις αναχωρήσεις και τη
      διέλευση ώρα της επένδυσης. Έτσι θα είστε πάντα σίγουροι ότι το φορτίο σας
      θα είναι εκεί όταν χρειάζεται.
    </div>
    <br />
  </div>
);

const SeaTransports = () => {
  const { lang } = useLangContext();

  return lang === "gr-GR" ? grText : enText;
};

export default SeaTransports;

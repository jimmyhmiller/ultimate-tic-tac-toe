(ns ultimate-tic-tac-toe.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]))


(defn generate-board [[tl tm tr ml mm mr bl bm br]]
  {:tl tl
   :tm tm
   :tr tr
   :ml ml
   :mm mm
   :mr mr
   :bl bl
   :bm bm
   :br br})

(defonce app-state (atom {:tl (generate-board [:_ :_ :_ :_ :_ :_ :_ :_ :_])
                          :tm (generate-board [:_ :_ :_ :_ :_ :_ :_ :_ :_])
                          :tr (generate-board [:_ :_ :_ :_ :_ :_ :_ :_ :_])
                          :ml (generate-board [:_ :_ :_ :_ :_ :_ :_ :_ :_])
                          :mm (generate-board [:_ :_ :_ :_ :_ :_ :_ :_ :_])
                          :mr (generate-board [:_ :_ :_ :_ :_ :_ :_ :_ :_])
                          :bl (generate-board [:_ :_ :_ :_ :_ :_ :_ :_ :_])
                          :bm (generate-board [:_ :_ :_ :_ :_ :_ :_ :_ :_])
                          :br (generate-board [:_ :_ :_ :_ :_ :_ :_ :_ :_])
                          :big (generate-board [:_ :_ :_ :_ :_ :_ :_ :_ :_])
                          :current-player :X
                          :current-board :_}))

(defn board-full? [board]
  (not-any? #(= % :_) (vals board)))

(def switch-players {:X :O :O :X})

(defn place-piece [board spot]
  (when (and
         (= (-> @app-state board spot) :_)
         (not= board :big)
         (or (= (@app-state :current-board) board)
             (= (@app-state :current-board) :_)
             (board-full? (@app-state (@app-state :current-board)))))
    (swap! app-state
           (fn [state]
             (-> state
                 (assoc-in [board spot] (@app-state :current-player))
                 (assoc :current-player (switch-players
                                         (@app-state :current-player)))
                 (assoc :current-board spot))))))

(defn combine-keywords [k1 k2]
  (keyword (str (name k1) (name k2))))

(defn mark-cell [mark size]
  (cond (= mark :_)
        {}
        (= mark :X)
        {:background-image "url(images/X.png)"
         :background-size (str (- size 20) "px " (- size 20) "px")
         :background-repeat "no-repeat"
         :background-position "60% 60%"}
        (= mark :O)
        {:background-image "url(images/O.png)"
         :background-size (str (- size 20) "px " (- size 20) "px")
         :background-repeat "no-repeat"
         :background-position "60% 60%"}))

(defn create-cell [board spot mark size]
  [:span {:class (name spot)
          :style
          (merge
           {:height size
            :width size}
           (mark-cell mark size))
          :on-click #(place-piece board spot)}])

(defn create-row [board row marks cell-size]
  [:div.row
   {:style
    {:height cell-size
     :width (* (+ cell-size 6) 3)}}
   (map
    (fn [spot]
      (let [spot (combine-keywords row spot)
            mark (marks spot)]
        (create-cell board spot mark cell-size)))
    [:l :m :r])])

(defn create-board [board app {:keys [x y] :as position} cell-size]
  (let [active? (or
                 (= (app :current-board) board)
                 (= (app :current-board) :_)
                 (board-full? (app (app :current-board))))]
    [:div {:style
           {:position "absolute"
            :top y
            :left x}
           :class (if active? "active" "")}
     (map
      (fn [row position]
        (create-row board row (app board) cell-size))
      [:t :m :b])]))

(defn create-ultimate-boards [app {:keys [x y] :as position} cell-size]
  (map
   (fn [board board-position]
     (create-board board app board-position (/ cell-size 4)))
   [:tl :ml :bl :tm :mm :bm :tr :mr :br]
   (for [x1 (range 0 (* cell-size 3) cell-size)
         y1 (range 0 (* cell-size 3) cell-size)]
     {:x (+ (+ x1 x) (* cell-size 0.125))
      :y (+ (+ y1 y) (* cell-size 0.125))})))

(defn main []
  (om/root
   (fn [app owner]
     (reify
       om/IRender
       (render [_]
               (html [:div
                      [:span.big (create-board :big app {:x 0 :y 0} 230)]
                      (create-ultimate-boards app {:x 0 :y 0} 230)]))))
   app-state
   {:target (. js/document (getElementById "app"))}))

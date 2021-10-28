--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cart_item; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.cart_item (
    id integer NOT NULL,
    session_id integer,
    product_id integer,
    quantity integer,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.cart_item OWNER TO anhtran;

--
-- Name: cart_item_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.cart_item ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cart_item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: discount; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.discount (
    id integer NOT NULL,
    name character varying(100),
    description text,
    discount_percent smallint,
    active boolean,
    created_at timestamp without time zone,
    modified_at timestamp without time zone,
    deleted_at timestamp without time zone,
    slug character varying(100)
);


ALTER TABLE public.discount OWNER TO anhtran;

--
-- Name: discount_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.discount ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.discount_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: order_details; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.order_details (
    id integer NOT NULL,
    user_id integer,
    total integer,
    payment_id integer,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.order_details OWNER TO anhtran;

--
-- Name: order_details_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.order_details ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.order_details_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: order_item; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.order_item (
    id integer NOT NULL,
    order_id integer,
    product_id integer,
    quantity integer,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.order_item OWNER TO anhtran;

--
-- Name: order_items_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.order_item ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.order_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: payment_details; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.payment_details (
    id integer NOT NULL,
    order_id integer,
    amount integer,
    provider character varying,
    status character varying,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.payment_details OWNER TO anhtran;

--
-- Name: payment_details_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.payment_details ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.payment_details_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: product; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(255),
    price integer,
    discount smallint,
    quantity smallint,
    category character varying(50),
    current_price integer,
    images text,
    colors text,
    sizes text
);


ALTER TABLE public.product OWNER TO anhtran;

--
-- Name: product_category; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.product_category (
    id integer NOT NULL,
    name character varying(100),
    description text,
    created_at timestamp without time zone,
    modified_at timestamp without time zone,
    deleted_at timestamp without time zone,
    slug character varying(130)
);


ALTER TABLE public.product_category OWNER TO anhtran;

--
-- Name: product_category_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.product_category ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.product_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: product_color; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.product_color (
    id integer NOT NULL,
    label character varying(20),
    color character varying(10)
);


ALTER TABLE public.product_color OWNER TO anhtran;

--
-- Name: product_color_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.product_color ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.product_color_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: product_size; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.product_size (
    id integer NOT NULL,
    size character varying(10)
);


ALTER TABLE public.product_size OWNER TO anhtran;

--
-- Name: product_size_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.product_size ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.product_size_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: product_type; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.product_type (
    id integer NOT NULL,
    name character varying(100),
    count integer
);


ALTER TABLE public.product_type OWNER TO anhtran;

--
-- Name: product_type_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.product_type ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.product_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: punctuation_review; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.punctuation_review (
    id integer NOT NULL,
    product_id integer,
    punctuation double precision,
    count_options integer
);


ALTER TABLE public.punctuation_review OWNER TO anhtran;

--
-- Name: punctuation_review_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.punctuation_review ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.punctuation_review_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: review; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.review (
    id integer NOT NULL,
    product_id integer,
    name character varying(50),
    avatar text,
    description text,
    punctuation smallint
);


ALTER TABLE public.review OWNER TO anhtran;

--
-- Name: review_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.review ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.review_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: shopping_session; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.shopping_session (
    id integer NOT NULL,
    user_id integer,
    total integer,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.shopping_session OWNER TO anhtran;

--
-- Name: shopping_session_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.shopping_session ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.shopping_session_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying(50),
    password text,
    name character varying(50),
    phone character varying(15),
    created_at timestamp without time zone,
    modified_at timestamp without time zone,
    role character varying(10)
);


ALTER TABLE public."user" OWNER TO anhtran;

--
-- Name: user_address; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.user_address (
    id integer NOT NULL,
    user_id integer,
    address_line1 text,
    address_line2 text,
    city character varying(30),
    postal_code character varying(10),
    country character varying(10),
    phone character varying(15)
);


ALTER TABLE public.user_address OWNER TO anhtran;

--
-- Name: user_address_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.user_address ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_address_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public."user" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_payment; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.user_payment (
    id integer NOT NULL,
    user_id integer,
    payment_type character varying(30),
    provider character varying(30),
    acount_no integer,
    expiry date,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.user_payment OWNER TO anhtran;

--
-- Name: user_payment_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.user_payment ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_payment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: vote; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.vote (
    id integer NOT NULL,
    product_id integer,
    value smallint,
    count smallint
);


ALTER TABLE public.vote OWNER TO anhtran;

--
-- Name: vote_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.vote ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.vote_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: cart_item; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.cart_item (id, session_id, product_id, quantity, created_at, modified_at) FROM stdin;
\.


--
-- Data for Name: discount; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.discount (id, name, description, discount_percent, active, created_at, modified_at, deleted_at, slug) FROM stdin;
\.


--
-- Data for Name: order_details; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.order_details (id, user_id, total, payment_id, created_at, modified_at) FROM stdin;
\.


--
-- Data for Name: order_item; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.order_item (id, order_id, product_id, quantity, created_at, modified_at) FROM stdin;
\.


--
-- Data for Name: payment_details; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.payment_details (id, order_id, amount, provider, status, created_at, modified_at) FROM stdin;
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.product (id, name, price, discount, quantity, category, current_price, images, colors, sizes) FROM stdin;
2	Áo phông White Summer Vibes	119000	25	2	T-shirt	89000	/images/products/product-2.jpg	000, 6F3E18, D4BE8D, FFF	xl, l
3	Áo phông White Summer Vibes	119000	25	2	T-shirt	89000	/images/products/product-3.jpg	000, 6F3E18, D4BE8D, FFF	xl, l
4	Áo phông White Summer Vibes	119000	25	2	T-shirt	89000	/images/products/product-4.jpg	000, 6F3E18, D4BE8D, FFF	xl, l
5	Áo phông White Summer Vibes	119000	25	2	T-shirt	89000	/images/products/product-5.jpg	000, 6F3E18, D4BE8D, FFF	xl, l
6	Áo phông White Summer Vibes	119000	25	2	T-shirt	89000	/images/products/product-6.jpg	000, 6F3E18, D4BE8D, FFF	xl, l
1	Áo phông White Summer Vibes	119000	25	2	T-shirt	89000	/images/products/product-1.jpg	000, 6F3E18, D4BE8D, FFF	xl, l
\.


--
-- Data for Name: product_category; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.product_category (id, name, description, created_at, modified_at, deleted_at, slug) FROM stdin;
1	Bộ sưu tập mùa đông	xyz	2021-10-21 09:12:18.085	\N	\N	bo-suu-tap-mua-djong
\.


--
-- Data for Name: product_color; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.product_color (id, label, color) FROM stdin;
\.


--
-- Data for Name: product_size; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.product_size (id, size) FROM stdin;
\.


--
-- Data for Name: product_type; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.product_type (id, name, count) FROM stdin;
\.


--
-- Data for Name: punctuation_review; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.punctuation_review (id, product_id, punctuation, count_options) FROM stdin;
\.


--
-- Data for Name: review; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.review (id, product_id, name, avatar, description, punctuation) FROM stdin;
\.


--
-- Data for Name: shopping_session; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.shopping_session (id, user_id, total, created_at, modified_at) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public."user" (id, email, password, name, phone, created_at, modified_at, role) FROM stdin;
2	tranquocanh.3009@gmail.com	$2a$06$Jb/OMfcZazQVpk8BvGrSCOf25XeiOGBA9Kp0pe0CSzYIsVRlN8ebK	anh	\N	2021-10-21 07:39:33.026	2021-10-22 07:14:47.343	admin
6	kjh	123	456	\N	\N	\N	\N
\.


--
-- Data for Name: user_address; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.user_address (id, user_id, address_line1, address_line2, city, postal_code, country, phone) FROM stdin;
2	2	duc tan	\N	long an	\N	\N	123456
\.


--
-- Data for Name: user_payment; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.user_payment (id, user_id, payment_type, provider, acount_no, expiry, created_at, modified_at) FROM stdin;
\.


--
-- Data for Name: vote; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.vote (id, product_id, value, count) FROM stdin;
16	1	1	1
21	1	2	10
22	1	3	10
23	1	4	20
24	1	5	40
25	2	1	1
26	2	2	10
27	2	3	10
28	2	4	20
29	2	5	40
30	3	1	1
31	3	2	10
32	3	3	10
33	3	4	20
34	3	5	40
35	4	1	1
36	4	2	10
37	4	3	10
38	4	4	20
39	4	5	40
40	5	1	1
41	5	2	10
42	5	3	10
43	5	4	20
44	5	5	40
45	6	1	1
46	6	2	10
47	6	3	10
48	6	4	20
49	6	5	40
\.


--
-- Name: cart_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.cart_item_id_seq', 1, false);


--
-- Name: discount_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.discount_id_seq', 1, false);


--
-- Name: order_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.order_details_id_seq', 1, false);


--
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.order_items_id_seq', 1, false);


--
-- Name: payment_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.payment_details_id_seq', 1, false);


--
-- Name: product_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.product_category_id_seq', 2, true);


--
-- Name: product_color_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.product_color_id_seq', 1, false);


--
-- Name: product_size_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.product_size_id_seq', 1, false);


--
-- Name: product_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.product_type_id_seq', 1, false);


--
-- Name: punctuation_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.punctuation_review_id_seq', 1, false);


--
-- Name: review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.review_id_seq', 1, false);


--
-- Name: shopping_session_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.shopping_session_id_seq', 1, false);


--
-- Name: user_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.user_address_id_seq', 3, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.user_id_seq', 6, true);


--
-- Name: user_payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.user_payment_id_seq', 1, false);


--
-- Name: vote_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.vote_id_seq', 49, true);


--
-- Name: cart_item cart_item_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_pkey PRIMARY KEY (id);


--
-- Name: cart_item cart_item_product_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_product_id_key UNIQUE (product_id);


--
-- Name: discount discount_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.discount
    ADD CONSTRAINT discount_pkey PRIMARY KEY (id);


--
-- Name: order_details order_details_payment_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_payment_id_key UNIQUE (payment_id);


--
-- Name: order_details order_details_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pkey PRIMARY KEY (id);


--
-- Name: order_details order_details_user_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_user_id_key UNIQUE (user_id);


--
-- Name: order_item order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- Name: order_item order_items_product_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_items_product_id_key UNIQUE (product_id);


--
-- Name: payment_details payment_details_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.payment_details
    ADD CONSTRAINT payment_details_pkey PRIMARY KEY (id);


--
-- Name: product_category product_category_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.product_category
    ADD CONSTRAINT product_category_pkey PRIMARY KEY (id);


--
-- Name: product_color product_color_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.product_color
    ADD CONSTRAINT product_color_pkey PRIMARY KEY (id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- Name: product_size product_size_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.product_size
    ADD CONSTRAINT product_size_pkey PRIMARY KEY (id);


--
-- Name: product_type product_type_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.product_type
    ADD CONSTRAINT product_type_pkey PRIMARY KEY (id);


--
-- Name: punctuation_review punctuation_review_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.punctuation_review
    ADD CONSTRAINT punctuation_review_pkey PRIMARY KEY (id);


--
-- Name: punctuation_review punctuation_review_product_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.punctuation_review
    ADD CONSTRAINT punctuation_review_product_id_key UNIQUE (product_id);


--
-- Name: review review_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.review
    ADD CONSTRAINT review_pkey PRIMARY KEY (id);


--
-- Name: review review_product_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.review
    ADD CONSTRAINT review_product_id_key UNIQUE (product_id);


--
-- Name: shopping_session shopping_session_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.shopping_session
    ADD CONSTRAINT shopping_session_pkey PRIMARY KEY (id);


--
-- Name: shopping_session shopping_session_user_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.shopping_session
    ADD CONSTRAINT shopping_session_user_id_key UNIQUE (user_id);


--
-- Name: user_address user_address_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.user_address
    ADD CONSTRAINT user_address_pkey PRIMARY KEY (id);


--
-- Name: user_address user_address_user_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.user_address
    ADD CONSTRAINT user_address_user_id_key UNIQUE (user_id);


--
-- Name: user user_email_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- Name: user_payment user_payment_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.user_payment
    ADD CONSTRAINT user_payment_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: vote vote_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.vote
    ADD CONSTRAINT vote_pkey PRIMARY KEY (id);


--
-- Name: cart_item cart_item_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.shopping_session(id);


--
-- Name: order_details order_details_payment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_payment_id_fkey FOREIGN KEY (payment_id) REFERENCES public.payment_details(id);


--
-- Name: order_details order_details_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: order_item order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.order_details(id);


--
-- Name: payment_details payment_details_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.payment_details
    ADD CONSTRAINT payment_details_id_fkey FOREIGN KEY (id) REFERENCES public.order_details(payment_id);


--
-- Name: payment_details payment_details_id_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.payment_details
    ADD CONSTRAINT payment_details_id_fkey1 FOREIGN KEY (id) REFERENCES public.order_details(payment_id);


--
-- Name: punctuation_review punctuation_review_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.punctuation_review
    ADD CONSTRAINT punctuation_review_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- Name: review review_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.review
    ADD CONSTRAINT review_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- Name: shopping_session shopping_session_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.shopping_session
    ADD CONSTRAINT shopping_session_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: user_address user_address_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.user_address
    ADD CONSTRAINT user_address_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: user_payment user_payment_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.user_payment
    ADD CONSTRAINT user_payment_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--


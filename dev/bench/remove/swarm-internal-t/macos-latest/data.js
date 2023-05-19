window.BENCHMARK_DATA = {
  "lastUpdate": 1684468857289,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "8aba8aef32232d502aaa8404b23532abd679bd9e",
          "message": "Removed t from BlockCompletion",
          "timestamp": "2023-05-19T12:13:30+09:00",
          "tree_id": "758f003cc68e38226c3434603c44a525979ac94b",
          "url": "https://github.com/greymistcube/libplanet/commit/8aba8aef32232d502aaa8404b23532abd679bd9e"
        },
        "date": 1684467202479,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7929665.357142857,
            "unit": "ns",
            "range": "± 130468.4043943544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19142038,
            "unit": "ns",
            "range": "± 517879.1683393338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46944816.90625,
            "unit": "ns",
            "range": "± 1448385.638039822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91938992.21428572,
            "unit": "ns",
            "range": "± 993103.7506191756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199204314.85714287,
            "unit": "ns",
            "range": "± 2193173.1914993664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64902.51063829787,
            "unit": "ns",
            "range": "± 10600.44762469829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306732.84444444446,
            "unit": "ns",
            "range": "± 18584.780513623922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296177.8101265823,
            "unit": "ns",
            "range": "± 15285.607522610306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276808.85714285716,
            "unit": "ns",
            "range": "± 19226.626802592946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4116051.8571428573,
            "unit": "ns",
            "range": "± 35926.483884256115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3636731.6428571427,
            "unit": "ns",
            "range": "± 38723.7968589126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15819.684210526315,
            "unit": "ns",
            "range": "± 1636.6169586769201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79678.68421052632,
            "unit": "ns",
            "range": "± 5931.240081063666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79374.31034482758,
            "unit": "ns",
            "range": "± 4697.131762886262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98440.16326530612,
            "unit": "ns",
            "range": "± 14067.70096450297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5054.868131868132,
            "unit": "ns",
            "range": "± 603.7396828433631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15447.967032967033,
            "unit": "ns",
            "range": "± 1375.3661771045997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1686813.0967741935,
            "unit": "ns",
            "range": "± 155395.17239270313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2989903.706185567,
            "unit": "ns",
            "range": "± 185805.96577747096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2667239.4693877553,
            "unit": "ns",
            "range": "± 256283.31043433055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6944023.283505155,
            "unit": "ns",
            "range": "± 481643.6308147781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3202700.6153846155,
            "unit": "ns",
            "range": "± 158658.2979015563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3388036.84,
            "unit": "ns",
            "range": "± 125242.39856950707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4408989,
            "unit": "ns",
            "range": "± 205574.40155053727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4335248.157894737,
            "unit": "ns",
            "range": "± 144423.66971004073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7490574.390243903,
            "unit": "ns",
            "range": "± 239615.55292852735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6383440.612723215,
            "unit": "ns",
            "range": "± 36996.8729899394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984917.4846354167,
            "unit": "ns",
            "range": "± 19543.005239211587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1259921.4381975445,
            "unit": "ns",
            "range": "± 6748.06738533092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2468619.693359375,
            "unit": "ns",
            "range": "± 32231.88781699246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 786829.4102313702,
            "unit": "ns",
            "range": "± 4077.005557629147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716797.4462890625,
            "unit": "ns",
            "range": "± 7152.332960549484"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "249122e6eec54718ebec56af1d1d48ffc83915a5",
          "message": "Changelog",
          "timestamp": "2023-05-19T12:19:43+09:00",
          "tree_id": "876e6324e9b02798028790be7c80ce480be47c3e",
          "url": "https://github.com/greymistcube/libplanet/commit/249122e6eec54718ebec56af1d1d48ffc83915a5"
        },
        "date": 1684467606568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7955669.307692308,
            "unit": "ns",
            "range": "± 216446.63148111483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21695926.789473683,
            "unit": "ns",
            "range": "± 683177.1752865296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50583059.8125,
            "unit": "ns",
            "range": "± 940900.3307172493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113063006.03225806,
            "unit": "ns",
            "range": "± 3434703.6799648134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245011951.2076923,
            "unit": "ns",
            "range": "± 11292869.19804078"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78733.96739130435,
            "unit": "ns",
            "range": "± 7110.964280526586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362475.4456521739,
            "unit": "ns",
            "range": "± 42080.84887174027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364606.1458333333,
            "unit": "ns",
            "range": "± 55364.206596525146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321949.62,
            "unit": "ns",
            "range": "± 7902.623358311677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4368885.360465116,
            "unit": "ns",
            "range": "± 234356.0642599036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3944588.289473684,
            "unit": "ns",
            "range": "± 84767.57357266787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24341.19191919192,
            "unit": "ns",
            "range": "± 3845.1134790631095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116098.24489795919,
            "unit": "ns",
            "range": "± 10635.92986188963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118152.72916666667,
            "unit": "ns",
            "range": "± 7043.507125048859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123201.92307692308,
            "unit": "ns",
            "range": "± 11570.069017589949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8696.979166666666,
            "unit": "ns",
            "range": "± 1570.3157106583217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22149.80612244898,
            "unit": "ns",
            "range": "± 2646.2923076425063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666366.4782608696,
            "unit": "ns",
            "range": "± 207777.38247431704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3085629.0125,
            "unit": "ns",
            "range": "± 161088.50127947744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2568847.3085106383,
            "unit": "ns",
            "range": "± 160036.50923140533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6501126.954545454,
            "unit": "ns",
            "range": "± 217152.7502967433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3797290.1195652173,
            "unit": "ns",
            "range": "± 692891.3634210094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3753547.5353535353,
            "unit": "ns",
            "range": "± 334543.55290819006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4768703.979166667,
            "unit": "ns",
            "range": "± 375820.43601057475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4721603.081632653,
            "unit": "ns",
            "range": "± 556022.932062111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8347667.978260869,
            "unit": "ns",
            "range": "± 767795.0222251253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6568584.949739584,
            "unit": "ns",
            "range": "± 248318.4853740323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2084036.2197425717,
            "unit": "ns",
            "range": "± 93704.37755055826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297969.189453125,
            "unit": "ns",
            "range": "± 8302.061179102571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3053840.8299175943,
            "unit": "ns",
            "range": "± 150273.57898804673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854198.7038762019,
            "unit": "ns",
            "range": "± 2976.7980547529714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716827.2117638221,
            "unit": "ns",
            "range": "± 2171.246178551759"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "621faf1cc3185543ff81b6fd854ef48e164acb9b",
          "message": "Removed t from swarm",
          "timestamp": "2023-05-19T12:43:53+09:00",
          "tree_id": "bf4dabeb40455252b8b6d33e0a715f9d6624b797",
          "url": "https://github.com/greymistcube/libplanet/commit/621faf1cc3185543ff81b6fd854ef48e164acb9b"
        },
        "date": 1684468837534,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8400250.322222222,
            "unit": "ns",
            "range": "± 256928.26822687025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21453265.959770113,
            "unit": "ns",
            "range": "± 1091218.5379957475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53033526.10169491,
            "unit": "ns",
            "range": "± 2339989.2844717563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106374447.29591836,
            "unit": "ns",
            "range": "± 4157789.3532706676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209170503,
            "unit": "ns",
            "range": "± 6164595.3023417955"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66018.67391304347,
            "unit": "ns",
            "range": "± 8936.690365213937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347621.58988764044,
            "unit": "ns",
            "range": "± 31806.117121282463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338299.2111111111,
            "unit": "ns",
            "range": "± 30605.17145264739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300204.72340425535,
            "unit": "ns",
            "range": "± 23319.624519817058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4544078.096385542,
            "unit": "ns",
            "range": "± 300051.4518958298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4067824.0625,
            "unit": "ns",
            "range": "± 211795.23401998053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19472.662790697676,
            "unit": "ns",
            "range": "± 4595.360126988616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94042.53846153847,
            "unit": "ns",
            "range": "± 11446.959627689297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88801.88505747127,
            "unit": "ns",
            "range": "± 12187.99017754896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98185.55056179775,
            "unit": "ns",
            "range": "± 21040.511566980862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7088.5989010989015,
            "unit": "ns",
            "range": "± 4021.2310167546816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20842.755555555555,
            "unit": "ns",
            "range": "± 7741.319254800441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1615375.2307692308,
            "unit": "ns",
            "range": "± 162425.45817109646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3220806.8658536584,
            "unit": "ns",
            "range": "± 249109.320776276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2704074.2359550563,
            "unit": "ns",
            "range": "± 275618.5801465093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7237598.90625,
            "unit": "ns",
            "range": "± 590008.5347036589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3494017.693548387,
            "unit": "ns",
            "range": "± 157855.98426464119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3747455.4777777777,
            "unit": "ns",
            "range": "± 268271.067295915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4705000.854838709,
            "unit": "ns",
            "range": "± 213874.78248669874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4573680.863636363,
            "unit": "ns",
            "range": "± 246176.44077131298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8985246.23,
            "unit": "ns",
            "range": "± 1083567.5560274168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6493835.918526785,
            "unit": "ns",
            "range": "± 79245.50386416497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2087365.3453947369,
            "unit": "ns",
            "range": "± 45732.12652693217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370294.9846354167,
            "unit": "ns",
            "range": "± 19427.244002820164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2935721.1049479167,
            "unit": "ns",
            "range": "± 52385.77218610932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876794.3944010417,
            "unit": "ns",
            "range": "± 12418.168484039015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796200.8752790178,
            "unit": "ns",
            "range": "± 14075.788283858574"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1703651128386,
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
          "id": "938aabdadb2386ae59955429b57526892249e438",
          "message": "Cleaned up ShortNode internal implementation",
          "timestamp": "2023-12-27T11:18:21+09:00",
          "tree_id": "69943ff6e6d38f5e91e2c20aff61552354c1487d",
          "url": "https://github.com/greymistcube/libplanet/commit/938aabdadb2386ae59955429b57526892249e438"
        },
        "date": 1703647732737,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9363355.035714285,
            "unit": "ns",
            "range": "± 242477.62504465226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23003675.82989691,
            "unit": "ns",
            "range": "± 1456950.4965967138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59535112.12337662,
            "unit": "ns",
            "range": "± 3023066.5089818984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116931892.80232558,
            "unit": "ns",
            "range": "± 6326888.239182403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228249230.4526316,
            "unit": "ns",
            "range": "± 24448087.671863746"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45549.322916666664,
            "unit": "ns",
            "range": "± 9432.164194917852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265886.1770833333,
            "unit": "ns",
            "range": "± 33199.232621599076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267203.13684210525,
            "unit": "ns",
            "range": "± 37818.81992674134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260182.16666666666,
            "unit": "ns",
            "range": "± 39098.8472148454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4746716.357142857,
            "unit": "ns",
            "range": "± 64596.24983501173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3882975.767676768,
            "unit": "ns",
            "range": "± 336609.32806571724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18820.457894736843,
            "unit": "ns",
            "range": "± 3910.8062588107027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97472.2688172043,
            "unit": "ns",
            "range": "± 9360.349724212261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91842.68478260869,
            "unit": "ns",
            "range": "± 14359.742642807983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90192.0306122449,
            "unit": "ns",
            "range": "± 26413.08297094417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5968.631313131313,
            "unit": "ns",
            "range": "± 2465.9361787530006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19091.666666666668,
            "unit": "ns",
            "range": "± 3958.275905347825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066787.7040816327,
            "unit": "ns",
            "range": "± 98882.38389515001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2299263.97979798,
            "unit": "ns",
            "range": "± 149605.66155273753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1519300.6836734693,
            "unit": "ns",
            "range": "± 108395.01950579553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6543521.888888889,
            "unit": "ns",
            "range": "± 183012.7778961251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3048947.21,
            "unit": "ns",
            "range": "± 226585.95387463603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3453158.592783505,
            "unit": "ns",
            "range": "± 310806.52610765083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4109100.052631579,
            "unit": "ns",
            "range": "± 360866.66375120153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4199152.355555556,
            "unit": "ns",
            "range": "± 307524.36311014305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14789164.217391305,
            "unit": "ns",
            "range": "± 1811962.0888554337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5203654.449617347,
            "unit": "ns",
            "range": "± 451250.9031680532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1611798.9654947917,
            "unit": "ns",
            "range": "± 40618.11188144868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1023993.3044704861,
            "unit": "ns",
            "range": "± 21400.27240264607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2398085.819754464,
            "unit": "ns",
            "range": "± 37523.94763178493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 753269.0164930555,
            "unit": "ns",
            "range": "± 20794.605004792094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585260.1310292119,
            "unit": "ns",
            "range": "± 14611.15671005772"
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
          "id": "9c432c5a336c4d5c216722103c691b710b1deeb2",
          "message": "Added documnetation and changelog",
          "timestamp": "2023-12-27T13:05:26+09:00",
          "tree_id": "8f7a6ce44c81de6991ac82263f5cf2d2e81e079f",
          "url": "https://github.com/greymistcube/libplanet/commit/9c432c5a336c4d5c216722103c691b710b1deeb2"
        },
        "date": 1703651027836,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8038444.944444444,
            "unit": "ns",
            "range": "± 170611.4891336703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21848064.775510203,
            "unit": "ns",
            "range": "± 1900674.4315027765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49722820.18181818,
            "unit": "ns",
            "range": "± 1213089.9941640822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104924709.5,
            "unit": "ns",
            "range": "± 6113422.094962366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261745126.0909091,
            "unit": "ns",
            "range": "± 48860051.58710393"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49014.96315789474,
            "unit": "ns",
            "range": "± 14962.84450273376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252020.50515463916,
            "unit": "ns",
            "range": "± 27251.544186034866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245632.5618556701,
            "unit": "ns",
            "range": "± 23047.534938603174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227750.86666666667,
            "unit": "ns",
            "range": "± 13601.588232773867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3969545.6612903224,
            "unit": "ns",
            "range": "± 178915.4680255266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3540296.5384615385,
            "unit": "ns",
            "range": "± 27550.580464590894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16653.1,
            "unit": "ns",
            "range": "± 1140.90424220775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78431.83673469388,
            "unit": "ns",
            "range": "± 13199.888271117177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70468.30434782608,
            "unit": "ns",
            "range": "± 5898.327754708016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72467.91237113402,
            "unit": "ns",
            "range": "± 11132.960314752108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4471.670212765957,
            "unit": "ns",
            "range": "± 695.2659023835116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14429.02688172043,
            "unit": "ns",
            "range": "± 1754.2512436649297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1490989.1082474226,
            "unit": "ns",
            "range": "± 141637.66871041027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3300999.6808510637,
            "unit": "ns",
            "range": "± 233102.9378424796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110504.5,
            "unit": "ns",
            "range": "± 163334.3850993637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8903339.433333334,
            "unit": "ns",
            "range": "± 258007.3537244805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3505979.1923076925,
            "unit": "ns",
            "range": "± 160545.69533235155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3272853.046153846,
            "unit": "ns",
            "range": "± 144763.43756727633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4410617.054347826,
            "unit": "ns",
            "range": "± 341058.11932873254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3942119.3829787234,
            "unit": "ns",
            "range": "± 272318.4442543604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13754939.278350515,
            "unit": "ns",
            "range": "± 2157823.7461898327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4852121.6975911455,
            "unit": "ns",
            "range": "± 121253.88731005511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1455045.894021739,
            "unit": "ns",
            "range": "± 55816.13093434774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 955198.3450092516,
            "unit": "ns",
            "range": "± 48491.957850709994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2218994.691467285,
            "unit": "ns",
            "range": "± 101781.03975478795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653673.1696223959,
            "unit": "ns",
            "range": "± 33021.251892755194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562980.8954326923,
            "unit": "ns",
            "range": "± 12699.164465252985"
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
          "id": "b16de5803ed328efb2737589f13906141bfc6da4",
          "message": "Added documnetation and changelog",
          "timestamp": "2023-12-27T13:06:40+09:00",
          "tree_id": "9a6c9abd10c9c5f186ad70cb60d91371c7b633dd",
          "url": "https://github.com/greymistcube/libplanet/commit/b16de5803ed328efb2737589f13906141bfc6da4"
        },
        "date": 1703651111651,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9110355.464646464,
            "unit": "ns",
            "range": "± 561717.9745063864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22739730.819444444,
            "unit": "ns",
            "range": "± 1116449.9193566265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55752127.1,
            "unit": "ns",
            "range": "± 1931279.2156663446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121391405.98876405,
            "unit": "ns",
            "range": "± 10619783.506593933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227937020.2777778,
            "unit": "ns",
            "range": "± 4744882.052914497"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74443.27011494253,
            "unit": "ns",
            "range": "± 5415.715417322265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343386.27173913043,
            "unit": "ns",
            "range": "± 34833.41431401035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 347160.5,
            "unit": "ns",
            "range": "± 44749.442718498314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 356848.72,
            "unit": "ns",
            "range": "± 56533.43201116673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4271704.601449275,
            "unit": "ns",
            "range": "± 202751.85391073386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3844730.68556701,
            "unit": "ns",
            "range": "± 246291.77385480935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24420.891304347828,
            "unit": "ns",
            "range": "± 3860.420813355364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113109.90322580645,
            "unit": "ns",
            "range": "± 13798.491771759534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119070.22340425532,
            "unit": "ns",
            "range": "± 19866.994146505804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115151.41052631578,
            "unit": "ns",
            "range": "± 14494.585751087636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8223.892857142857,
            "unit": "ns",
            "range": "± 1149.441991575285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23673.620879120877,
            "unit": "ns",
            "range": "± 3678.8051225459503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1566387.7626262626,
            "unit": "ns",
            "range": "± 209129.90790271896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2766761.4556962023,
            "unit": "ns",
            "range": "± 137237.0006409273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2377851.5416666665,
            "unit": "ns",
            "range": "± 274037.0233189176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10424884.909090908,
            "unit": "ns",
            "range": "± 1045754.9200847505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3522756.67,
            "unit": "ns",
            "range": "± 346879.66344500263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3600210.180412371,
            "unit": "ns",
            "range": "± 340286.3438310554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4626993.2272727275,
            "unit": "ns",
            "range": "± 395598.10913924675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4501251.94949495,
            "unit": "ns",
            "range": "± 403695.3392677422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20465368.07216495,
            "unit": "ns",
            "range": "± 3505470.973978052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6233545.13694853,
            "unit": "ns",
            "range": "± 122062.44160446114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2042365.875,
            "unit": "ns",
            "range": "± 42892.32117981447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138954.915736607,
            "unit": "ns",
            "range": "± 13862.609610048921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2971997.802734375,
            "unit": "ns",
            "range": "± 124238.82359910727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932296.3326480263,
            "unit": "ns",
            "range": "± 19554.67883015036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 814081.0423473011,
            "unit": "ns",
            "range": "± 19530.214746321315"
          }
        ]
      }
    ]
  }
}
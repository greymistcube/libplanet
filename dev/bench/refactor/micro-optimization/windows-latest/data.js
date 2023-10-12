window.BENCHMARK_DATA = {
  "lastUpdate": 1697117285617,
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
          "id": "0e8cb7af9ee23d25f1d64e74dfeba9781e0e54e7",
          "message": "Optimized BlockMarshaler",
          "timestamp": "2023-10-12T21:52:00+09:00",
          "tree_id": "2bf417fb47ee9a4212fde2010631d21168985448",
          "url": "https://github.com/greymistcube/libplanet/commit/0e8cb7af9ee23d25f1d64e74dfeba9781e0e54e7"
        },
        "date": 1697116330082,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1612501.0204081633,
            "unit": "ns",
            "range": "± 135571.99365232317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3069782.6086956523,
            "unit": "ns",
            "range": "± 118052.91337992434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2327096.5517241377,
            "unit": "ns",
            "range": "± 121897.93714823227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10434951.136363637,
            "unit": "ns",
            "range": "± 825607.7642915333"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60533.333333333336,
            "unit": "ns",
            "range": "± 6827.755532679467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9272260.714285715,
            "unit": "ns",
            "range": "± 265917.7000770835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24672225,
            "unit": "ns",
            "range": "± 477587.869053085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62533842.307692304,
            "unit": "ns",
            "range": "± 433161.73357753735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126700657.14285715,
            "unit": "ns",
            "range": "± 1518150.4352915173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256834150,
            "unit": "ns",
            "range": "± 4759845.5785876075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5461464.453125,
            "unit": "ns",
            "range": "± 39770.981512391474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1747814.8158482143,
            "unit": "ns",
            "range": "± 14653.142769514745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1283708.9146205357,
            "unit": "ns",
            "range": "± 14738.18611615286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3200351.1979166665,
            "unit": "ns",
            "range": "± 29109.52910134431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023510.1953125,
            "unit": "ns",
            "range": "± 17021.69786557524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 923853.57421875,
            "unit": "ns",
            "range": "± 9919.223915952769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4099200,
            "unit": "ns",
            "range": "± 82579.6963544914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4173178.378378378,
            "unit": "ns",
            "range": "± 141223.54646118713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5039800,
            "unit": "ns",
            "range": "± 94007.81217537189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4940134.782608695,
            "unit": "ns",
            "range": "± 236714.9904707241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12022014.285714285,
            "unit": "ns",
            "range": "± 417225.668931492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298610.4166666667,
            "unit": "ns",
            "range": "± 11614.265615188153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292081.25,
            "unit": "ns",
            "range": "± 5718.300301080149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261081.81818181818,
            "unit": "ns",
            "range": "± 16620.201401296737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4931637.5,
            "unit": "ns",
            "range": "± 93247.66216908603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4581441.176470588,
            "unit": "ns",
            "range": "± 76058.34979493976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25175.2688172043,
            "unit": "ns",
            "range": "± 1956.4084170599833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99060.86956521739,
            "unit": "ns",
            "range": "± 7514.702899989295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79271.73913043478,
            "unit": "ns",
            "range": "± 4783.1509704299015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89555.78947368421,
            "unit": "ns",
            "range": "± 12242.19869514367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5666.326530612245,
            "unit": "ns",
            "range": "± 763.8675166546948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21005.102040816328,
            "unit": "ns",
            "range": "± 1854.244084121868"
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
          "id": "bd218520742c2b0877fe99d9d21a5d385373ca4f",
          "message": "Changelog",
          "timestamp": "2023-10-12T22:08:45+09:00",
          "tree_id": "aa484ec8af9c2fe572a5de245fb0256607b82d11",
          "url": "https://github.com/greymistcube/libplanet/commit/bd218520742c2b0877fe99d9d21a5d385373ca4f"
        },
        "date": 1697117259455,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552816.4948453608,
            "unit": "ns",
            "range": "± 150287.69748969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2935632.3943661973,
            "unit": "ns",
            "range": "± 144036.59433297586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2233991.463414634,
            "unit": "ns",
            "range": "± 117555.12938509134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10305746.067415731,
            "unit": "ns",
            "range": "± 663390.8263021572"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56254.34782608696,
            "unit": "ns",
            "range": "± 3882.955514300824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9197180,
            "unit": "ns",
            "range": "± 151608.1942753378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24461126.315789472,
            "unit": "ns",
            "range": "± 516210.06150823826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64369767.64705882,
            "unit": "ns",
            "range": "± 2022665.958987999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129112560.16949153,
            "unit": "ns",
            "range": "± 5686235.209263437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254203812.9032258,
            "unit": "ns",
            "range": "± 7730956.2652900815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5487131.614583333,
            "unit": "ns",
            "range": "± 88175.21541132552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1745506.9140625,
            "unit": "ns",
            "range": "± 24323.540183713863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331192.4977022058,
            "unit": "ns",
            "range": "± 26823.70412537556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3233814.783653846,
            "unit": "ns",
            "range": "± 31634.648235038494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015325.1953125,
            "unit": "ns",
            "range": "± 14541.59177567343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 946935.5338541666,
            "unit": "ns",
            "range": "± 16133.16656449175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3892661.7647058824,
            "unit": "ns",
            "range": "± 123708.2712374117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4034948,
            "unit": "ns",
            "range": "± 159977.23720732832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5061438.095238095,
            "unit": "ns",
            "range": "± 117436.77650629923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4933458.333333333,
            "unit": "ns",
            "range": "± 76763.1713108374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12622970.786516855,
            "unit": "ns",
            "range": "± 896167.3003815962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298770.9090909091,
            "unit": "ns",
            "range": "± 12599.804124392727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286907.14285714284,
            "unit": "ns",
            "range": "± 5084.586706707044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262474.2268041237,
            "unit": "ns",
            "range": "± 15652.88364241631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4888871.428571428,
            "unit": "ns",
            "range": "± 54939.56719847768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4547336,
            "unit": "ns",
            "range": "± 118519.19633544602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24112.371134020617,
            "unit": "ns",
            "range": "± 2219.0584401553606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100867.74193548386,
            "unit": "ns",
            "range": "± 8021.698308884832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86090.4255319149,
            "unit": "ns",
            "range": "± 5338.2182430586245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89842.70833333333,
            "unit": "ns",
            "range": "± 8473.720922471417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6164.948453608247,
            "unit": "ns",
            "range": "± 981.9242627269982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22069.14893617021,
            "unit": "ns",
            "range": "± 1688.1004528373967"
          }
        ]
      }
    ]
  }
}
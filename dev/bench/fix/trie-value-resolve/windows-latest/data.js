window.BENCHMARK_DATA = {
  "lastUpdate": 1694143251624,
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
          "id": "a3658ff45129453a2361cbb951adbc69bdefd8f6",
          "message": "Changelog",
          "timestamp": "2023-09-08T12:04:22+09:00",
          "tree_id": "4be2bac805b5852cf01c6cd193c2121c3865b21c",
          "url": "https://github.com/greymistcube/libplanet/commit/a3658ff45129453a2361cbb951adbc69bdefd8f6"
        },
        "date": 1694143058408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1048331.5789473684,
            "unit": "ns",
            "range": "± 113063.69816711765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1863334.693877551,
            "unit": "ns",
            "range": "± 143277.29088343002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1270408.2474226805,
            "unit": "ns",
            "range": "± 109992.61118186444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3144650,
            "unit": "ns",
            "range": "± 157613.85260608705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35212.345679012345,
            "unit": "ns",
            "range": "± 1772.0315118564754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5013723.076923077,
            "unit": "ns",
            "range": "± 20161.479519376953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13563917.647058824,
            "unit": "ns",
            "range": "± 274074.42245513835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33969735.71428572,
            "unit": "ns",
            "range": "± 386750.6443873959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68010165.38461539,
            "unit": "ns",
            "range": "± 1091057.6870222108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136342920,
            "unit": "ns",
            "range": "± 2235016.5231731827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3253773.9583333335,
            "unit": "ns",
            "range": "± 25792.04215477234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1024292.7455357143,
            "unit": "ns",
            "range": "± 8337.069397100398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730530.5304276316,
            "unit": "ns",
            "range": "± 15216.252416353249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1882506.5848214286,
            "unit": "ns",
            "range": "± 29629.034019854993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 580338.4505208334,
            "unit": "ns",
            "range": "± 9727.884545826446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 530564.4714355469,
            "unit": "ns",
            "range": "± 7806.546240345368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2157270.707070707,
            "unit": "ns",
            "range": "± 155053.64197035314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273005.3191489363,
            "unit": "ns",
            "range": "± 128973.68625264603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2803078.947368421,
            "unit": "ns",
            "range": "± 55432.68769865914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2468961.7021276597,
            "unit": "ns",
            "range": "± 91110.27850475318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4010504.347826087,
            "unit": "ns",
            "range": "± 150788.3578714392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184354.6511627907,
            "unit": "ns",
            "range": "± 9239.323338818374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175395.7142857143,
            "unit": "ns",
            "range": "± 7911.639484801751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154200,
            "unit": "ns",
            "range": "± 10694.283909329008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2730671.4285714286,
            "unit": "ns",
            "range": "± 46893.96268459017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2482826.6666666665,
            "unit": "ns",
            "range": "± 44451.02387807871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15437.5,
            "unit": "ns",
            "range": "± 1650.4704273566817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63614.43298969072,
            "unit": "ns",
            "range": "± 5734.689574763428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52369.49152542373,
            "unit": "ns",
            "range": "± 2216.960814772622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62424.46808510638,
            "unit": "ns",
            "range": "± 10620.397155263528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3626.842105263158,
            "unit": "ns",
            "range": "± 527.0255013368428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13772.340425531915,
            "unit": "ns",
            "range": "± 1634.4677378553972"
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
          "id": "3d2009bc9b8484ac33f00f7d05eb3b419a512285",
          "message": "Bug fix for trie value resolution",
          "timestamp": "2023-09-08T11:58:58+09:00",
          "tree_id": "21775bbb67c59255d5b850b82f213bed62184d45",
          "url": "https://github.com/greymistcube/libplanet/commit/3d2009bc9b8484ac33f00f7d05eb3b419a512285"
        },
        "date": 1694143226144,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1477689.393939394,
            "unit": "ns",
            "range": "± 158022.72170526348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3008290.625,
            "unit": "ns",
            "range": "± 295258.06698837294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1980717.391304348,
            "unit": "ns",
            "range": "± 228362.1986234869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5325609.782608695,
            "unit": "ns",
            "range": "± 394351.4118867779"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52759.550561797754,
            "unit": "ns",
            "range": "± 4186.930941011665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8799957.692307692,
            "unit": "ns",
            "range": "± 230376.52167367563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24794514.285714287,
            "unit": "ns",
            "range": "± 400655.7026773887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64900861.11111111,
            "unit": "ns",
            "range": "± 2732758.3624109617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129035592.95774648,
            "unit": "ns",
            "range": "± 6264079.085372953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256327454.05405405,
            "unit": "ns",
            "range": "± 8657840.36141021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5535987.3046875,
            "unit": "ns",
            "range": "± 105447.78039859925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1732838.8671875,
            "unit": "ns",
            "range": "± 30110.600494845083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295232.8294836956,
            "unit": "ns",
            "range": "± 32327.623677433498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3204429.356060606,
            "unit": "ns",
            "range": "± 98827.16047655533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000132.3507254465,
            "unit": "ns",
            "range": "± 32189.0908709132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 942594.8014322916,
            "unit": "ns",
            "range": "± 17163.131655624988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3913891.304347826,
            "unit": "ns",
            "range": "± 286253.4048560585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4009337.234042553,
            "unit": "ns",
            "range": "± 250867.05899119328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4982515.909090909,
            "unit": "ns",
            "range": "± 311938.67909271305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4479314.893617021,
            "unit": "ns",
            "range": "± 290986.6559063834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7189659.574468086,
            "unit": "ns",
            "range": "± 429296.8797727427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296440.2173913043,
            "unit": "ns",
            "range": "± 22394.632695773224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287810.8695652174,
            "unit": "ns",
            "range": "± 18489.043126107517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269699.4382022472,
            "unit": "ns",
            "range": "± 17728.07944525183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5044840.860215054,
            "unit": "ns",
            "range": "± 308945.53242917696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4528416.304347826,
            "unit": "ns",
            "range": "± 298608.2844353867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23965.555555555555,
            "unit": "ns",
            "range": "± 2231.498771351179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101054.02298850575,
            "unit": "ns",
            "range": "± 7662.014499171343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87916.30434782608,
            "unit": "ns",
            "range": "± 8481.761650598495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98618.27956989247,
            "unit": "ns",
            "range": "± 17523.921205005798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6195.789473684211,
            "unit": "ns",
            "range": "± 879.0608854417023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23403.092783505155,
            "unit": "ns",
            "range": "± 2551.856089539183"
          }
        ]
      }
    ]
  }
}
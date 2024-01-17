window.BENCHMARK_DATA = {
  "lastUpdate": 1705470002860,
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
          "id": "a190c93147e682b08d5f6764040a3851eecc7e4b",
          "message": "Fixed tests",
          "timestamp": "2024-01-17T14:07:58+09:00",
          "tree_id": "40cbc79c3543accf5d4b6d0edc973ee3cadad634",
          "url": "https://github.com/greymistcube/libplanet/commit/a190c93147e682b08d5f6764040a3851eecc7e4b"
        },
        "date": 1705469205785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10641310.764705881,
            "unit": "ns",
            "range": "± 310254.38374187244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24636292.35714286,
            "unit": "ns",
            "range": "± 352592.70705923944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61704047,
            "unit": "ns",
            "range": "± 1330753.422401939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125984577.8125,
            "unit": "ns",
            "range": "± 2351846.010797241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254795993.33333334,
            "unit": "ns",
            "range": "± 3315528.90613977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62759.17857142857,
            "unit": "ns",
            "range": "± 7466.14074783775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306636.23863636365,
            "unit": "ns",
            "range": "± 26029.39562909522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299235.17741935485,
            "unit": "ns",
            "range": "± 13617.00023388579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287281.39743589744,
            "unit": "ns",
            "range": "± 22471.908847760827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5094355.733333333,
            "unit": "ns",
            "range": "± 149963.10139766298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4514940.183333334,
            "unit": "ns",
            "range": "± 201111.52782587413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22221.673684210527,
            "unit": "ns",
            "range": "± 3508.3663636116153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97072.1294117647,
            "unit": "ns",
            "range": "± 13537.994660344988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97181.0786516854,
            "unit": "ns",
            "range": "± 7856.722119284397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100252.56315789474,
            "unit": "ns",
            "range": "± 14721.5465760807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7236.080645161291,
            "unit": "ns",
            "range": "± 880.3751710465439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23426.217391304348,
            "unit": "ns",
            "range": "± 3838.9872672276438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1224423.7608695652,
            "unit": "ns",
            "range": "± 135876.02872450382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2661204.290322581,
            "unit": "ns",
            "range": "± 247446.77360528425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2025682.2121212122,
            "unit": "ns",
            "range": "± 273608.47030734253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 25512238,
            "unit": "ns",
            "range": "± 5046429.924090512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683950.8484848486,
            "unit": "ns",
            "range": "± 106154.69686474111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3988438.625,
            "unit": "ns",
            "range": "± 122510.30649487308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4631373.379310345,
            "unit": "ns",
            "range": "± 133360.11521210792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4785258.111111111,
            "unit": "ns",
            "range": "± 101257.58286442429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29137862.42268041,
            "unit": "ns",
            "range": "± 4809886.997715174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5833227.332682292,
            "unit": "ns",
            "range": "± 59123.685291943555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1747588.3307976974,
            "unit": "ns",
            "range": "± 33643.73982357831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155185.6627775494,
            "unit": "ns",
            "range": "± 25561.960032361305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2745014.32125,
            "unit": "ns",
            "range": "± 72621.33079132572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852496.1741333008,
            "unit": "ns",
            "range": "± 16035.646993134515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735484.1649925595,
            "unit": "ns",
            "range": "± 17420.088967159805"
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
          "id": "e2f037a8ab451cbfa5c833c548188f1e3062177c",
          "message": "Changelog",
          "timestamp": "2024-01-17T14:25:05+09:00",
          "tree_id": "130fd358dbe8735762e8ce1a394adc9c3fbe0a3b",
          "url": "https://github.com/greymistcube/libplanet/commit/e2f037a8ab451cbfa5c833c548188f1e3062177c"
        },
        "date": 1705469987299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7603154.25,
            "unit": "ns",
            "range": "± 165297.1989067204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19141168.81395349,
            "unit": "ns",
            "range": "± 683935.5227984808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47081897.03333333,
            "unit": "ns",
            "range": "± 788721.9968528535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92703085.26923077,
            "unit": "ns",
            "range": "± 1406333.289116841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189321758.06666666,
            "unit": "ns",
            "range": "± 2467218.3001498864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35804.41573033708,
            "unit": "ns",
            "range": "± 5677.646669193522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216850.94871794872,
            "unit": "ns",
            "range": "± 10662.541475868158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211081.06741573033,
            "unit": "ns",
            "range": "± 11568.862153130303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203095.22340425532,
            "unit": "ns",
            "range": "± 17701.206753349405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3865707.6875,
            "unit": "ns",
            "range": "± 66462.4049948227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3450777.8333333335,
            "unit": "ns",
            "range": "± 37835.629625414134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12899.195652173914,
            "unit": "ns",
            "range": "± 931.030402108985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57927.22727272727,
            "unit": "ns",
            "range": "± 3257.0222022446083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53674.91860465116,
            "unit": "ns",
            "range": "± 4012.596176498427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62229.052083333336,
            "unit": "ns",
            "range": "± 10136.930555225745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3491.6704545454545,
            "unit": "ns",
            "range": "± 431.0706191069653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11938,
            "unit": "ns",
            "range": "± 995.7768239651228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1200879.3829787234,
            "unit": "ns",
            "range": "± 108371.10102950128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2594819.789473684,
            "unit": "ns",
            "range": "± 177822.77384937828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2409107.1666666665,
            "unit": "ns",
            "range": "± 33995.744697169845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21194082.139534883,
            "unit": "ns",
            "range": "± 2315548.0249859532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2830077.4693877553,
            "unit": "ns",
            "range": "± 111699.8586128436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2925425.1025641025,
            "unit": "ns",
            "range": "± 75749.88222634404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3542159.657142857,
            "unit": "ns",
            "range": "± 113271.5069075815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3670960.43373494,
            "unit": "ns",
            "range": "± 194149.67544247748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21844159.933333334,
            "unit": "ns",
            "range": "± 2270248.3274488864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4257368.953125,
            "unit": "ns",
            "range": "± 62332.43042495009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1337040.578515625,
            "unit": "ns",
            "range": "± 8161.5068230610495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 897428.3071289062,
            "unit": "ns",
            "range": "± 23280.33076613599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2257629.4970703125,
            "unit": "ns",
            "range": "± 244149.46596025402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635104.8814603365,
            "unit": "ns",
            "range": "± 4524.345948731934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578145.843359375,
            "unit": "ns",
            "range": "± 5874.695630122208"
          }
        ]
      }
    ]
  }
}
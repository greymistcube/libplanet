window.BENCHMARK_DATA = {
  "lastUpdate": 1707152686649,
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
          "id": "9f60eeef9e4d848990aa140c25ac59840172a624",
          "message": "Updated graphql schema",
          "timestamp": "2024-02-06T01:36:10+09:00",
          "tree_id": "04e35806d84d3c33f6d6c16daeafa124a4123e97",
          "url": "https://github.com/greymistcube/libplanet/commit/9f60eeef9e4d848990aa140c25ac59840172a624"
        },
        "date": 1707152409410,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9610369.48275862,
            "unit": "ns",
            "range": "± 1098448.73629169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21518818.63157895,
            "unit": "ns",
            "range": "± 1792397.8372500213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60115278.265957445,
            "unit": "ns",
            "range": "± 7999197.576761457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114601725.98275863,
            "unit": "ns",
            "range": "± 9656062.190455029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256775938.989011,
            "unit": "ns",
            "range": "± 24480076.012854867"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56619.23863636364,
            "unit": "ns",
            "range": "± 9262.143403400572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379609.7731958763,
            "unit": "ns",
            "range": "± 107550.55828379672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304831.12941176473,
            "unit": "ns",
            "range": "± 37446.848360547185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295656.74358974356,
            "unit": "ns",
            "range": "± 23985.08259635933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6145495.857142857,
            "unit": "ns",
            "range": "± 1141524.7634326664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5432963.61,
            "unit": "ns",
            "range": "± 1074934.566923686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28305.98979591837,
            "unit": "ns",
            "range": "± 5982.507739699542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131843.02,
            "unit": "ns",
            "range": "± 29449.632591551523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120973.46808510639,
            "unit": "ns",
            "range": "± 27803.06611367802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87204.82608695653,
            "unit": "ns",
            "range": "± 14819.786704585928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5879.239130434783,
            "unit": "ns",
            "range": "± 1028.1583756819518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30075.51030927835,
            "unit": "ns",
            "range": "± 6711.983888437353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1499117.2303370787,
            "unit": "ns",
            "range": "± 268014.48459571786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2906197.855555556,
            "unit": "ns",
            "range": "± 305275.1497979649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2191049.445652174,
            "unit": "ns",
            "range": "± 240977.7756021991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 28270958.92105263,
            "unit": "ns",
            "range": "± 7148307.918568059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2916087.682352941,
            "unit": "ns",
            "range": "± 156234.46880838549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3331173.112359551,
            "unit": "ns",
            "range": "± 317271.92682580656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5460108.5154639175,
            "unit": "ns",
            "range": "± 1045244.4963715835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6007080.510204081,
            "unit": "ns",
            "range": "± 1207329.097122736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33485280.86842105,
            "unit": "ns",
            "range": "± 5243040.856516068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5804819.912109375,
            "unit": "ns",
            "range": "± 848635.2678838306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1448605.789341518,
            "unit": "ns",
            "range": "± 75230.85839740733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 898169.0486653646,
            "unit": "ns",
            "range": "± 5493.45809354185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1993379.425998264,
            "unit": "ns",
            "range": "± 39630.26319716347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 750103.4264119467,
            "unit": "ns",
            "range": "± 29070.198953515126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 624783.4531954735,
            "unit": "ns",
            "range": "± 49109.36704526539"
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
          "id": "09bea08b8ced82d4bdf0d79ba8057ed59b2f4b3e",
          "message": "Changelog",
          "timestamp": "2024-02-06T01:41:57+09:00",
          "tree_id": "93d7af9b7f4b535356bfb463ce92adf87db6d382",
          "url": "https://github.com/greymistcube/libplanet/commit/09bea08b8ced82d4bdf0d79ba8057ed59b2f4b3e"
        },
        "date": 1707152657854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8369151.1875,
            "unit": "ns",
            "range": "± 158104.59623140574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19652826.852941178,
            "unit": "ns",
            "range": "± 721378.7347373313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58766822.22105263,
            "unit": "ns",
            "range": "± 9993264.291662212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138675126.5,
            "unit": "ns",
            "range": "± 17548901.637352277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219125450.87078652,
            "unit": "ns",
            "range": "± 15397887.858737232"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53450.942528735635,
            "unit": "ns",
            "range": "± 9020.083568885708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255555.62790697673,
            "unit": "ns",
            "range": "± 17294.413441949815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242387.1075268817,
            "unit": "ns",
            "range": "± 26466.974842927146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244116.26966292135,
            "unit": "ns",
            "range": "± 16452.779489388886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4132920.6666666665,
            "unit": "ns",
            "range": "± 168656.05247453306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3724765.2666666666,
            "unit": "ns",
            "range": "± 67863.50409089732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18885.680412371134,
            "unit": "ns",
            "range": "± 4869.325215371205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100176.19565217392,
            "unit": "ns",
            "range": "± 16293.396852537126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76375.8762886598,
            "unit": "ns",
            "range": "± 14908.364949373314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91774.52083333333,
            "unit": "ns",
            "range": "± 18804.315527631396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6612.709677419355,
            "unit": "ns",
            "range": "± 1707.9373561763678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17636.56842105263,
            "unit": "ns",
            "range": "± 5792.921474124705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1074999.042105263,
            "unit": "ns",
            "range": "± 62619.19683460476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2371361.6785714286,
            "unit": "ns",
            "range": "± 141459.24362052348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1976408.9010989012,
            "unit": "ns",
            "range": "± 190499.56677349718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20854754.346153848,
            "unit": "ns",
            "range": "± 3621089.9992628517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3073963.8958333335,
            "unit": "ns",
            "range": "± 120348.0187398444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3783768.352631579,
            "unit": "ns",
            "range": "± 769610.2542262208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3660055.7333333334,
            "unit": "ns",
            "range": "± 108506.00423484705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3815074.9534883723,
            "unit": "ns",
            "range": "± 204608.14947599702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24396713.978947368,
            "unit": "ns",
            "range": "± 3965464.102140133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6504896.584971438,
            "unit": "ns",
            "range": "± 1070017.165274187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2135343.8190714517,
            "unit": "ns",
            "range": "± 353277.6622676221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439502.8919921876,
            "unit": "ns",
            "range": "± 257150.42953220682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2832040.3907047193,
            "unit": "ns",
            "range": "± 501851.03729170864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 676484.4223356427,
            "unit": "ns",
            "range": "± 27774.267049606016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 602993.5690354567,
            "unit": "ns",
            "range": "± 4222.822396624186"
          }
        ]
      }
    ]
  }
}
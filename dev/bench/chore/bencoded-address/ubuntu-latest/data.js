window.BENCHMARK_DATA = {
  "lastUpdate": 1699332047777,
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
          "id": "142e48097ebf05b86f61f397382388d721ecbd11",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T15:19:37+09:00",
          "tree_id": "0353fbdd6a340ae1c7174cc775146df82e769b4e",
          "url": "https://github.com/greymistcube/libplanet/commit/142e48097ebf05b86f61f397382388d721ecbd11"
        },
        "date": 1699254950257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5769576.466666667,
            "unit": "ns",
            "range": "± 59388.605798547236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14165417.42857143,
            "unit": "ns",
            "range": "± 107279.38820558092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36213418.75,
            "unit": "ns",
            "range": "± 334089.9674766786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76153801.53846154,
            "unit": "ns",
            "range": "± 268711.4230038783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151170336.57142857,
            "unit": "ns",
            "range": "± 2626884.648783589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1043719.9591836735,
            "unit": "ns",
            "range": "± 110879.81405180685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1932010.0666666667,
            "unit": "ns",
            "range": "± 72190.22291185723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495728.0919540229,
            "unit": "ns",
            "range": "± 102171.03839260912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6372236.684210527,
            "unit": "ns",
            "range": "± 274604.68958038813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411144.0396825396,
            "unit": "ns",
            "range": "± 97803.02022858536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2568473.4,
            "unit": "ns",
            "range": "± 61841.80212647429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3168724.1944444445,
            "unit": "ns",
            "range": "± 98839.11436465666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3057938.1228070175,
            "unit": "ns",
            "range": "± 131196.5550278706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7685912.816326531,
            "unit": "ns",
            "range": "± 261539.89804582344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41813.92857142857,
            "unit": "ns",
            "range": "± 5676.067371805796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3717842.86484375,
            "unit": "ns",
            "range": "± 58891.666733646474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196390.4151141827,
            "unit": "ns",
            "range": "± 6341.264187067526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781800.5374098558,
            "unit": "ns",
            "range": "± 4269.076366974023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960636.39453125,
            "unit": "ns",
            "range": "± 4486.784774542251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618404.984514509,
            "unit": "ns",
            "range": "± 657.9119478026926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586015.8731282552,
            "unit": "ns",
            "range": "± 1085.8283763917325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208099.22222222222,
            "unit": "ns",
            "range": "± 4423.97875959633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192827.38028169013,
            "unit": "ns",
            "range": "± 8710.203700039228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176068.1875,
            "unit": "ns",
            "range": "± 5382.326852840363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3119335.285714286,
            "unit": "ns",
            "range": "± 40487.77964622559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2907842.6666666665,
            "unit": "ns",
            "range": "± 36750.40343931453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18218.217391304348,
            "unit": "ns",
            "range": "± 1126.7075229763852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69700.83838383839,
            "unit": "ns",
            "range": "± 8454.713537076335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89839.78571428571,
            "unit": "ns",
            "range": "± 1496.6275513542198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88232.51020408163,
            "unit": "ns",
            "range": "± 13785.651373012639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5053.979797979798,
            "unit": "ns",
            "range": "± 1171.2305492889582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14129.333333333334,
            "unit": "ns",
            "range": "± 1880.768071919256"
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
          "id": "19c898f4ba2c7990736271b30c2c6229e0153418",
          "message": "Use Address.Bencoded instead of Address.ByteArray",
          "timestamp": "2023-11-07T13:29:59+09:00",
          "tree_id": "ea3cfcea6fe14dec7636971cca2796d673d0f37c",
          "url": "https://github.com/greymistcube/libplanet/commit/19c898f4ba2c7990736271b30c2c6229e0153418"
        },
        "date": 1699332040546,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5514373.857142857,
            "unit": "ns",
            "range": "± 25958.40114448542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13920091.357142856,
            "unit": "ns",
            "range": "± 127760.0400484061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36524289.28571428,
            "unit": "ns",
            "range": "± 284431.5731585552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73750655.73076923,
            "unit": "ns",
            "range": "± 540957.256347664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148072934.76923078,
            "unit": "ns",
            "range": "± 944742.4703380065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993108.793814433,
            "unit": "ns",
            "range": "± 100583.54083090357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871846.4827586208,
            "unit": "ns",
            "range": "± 81096.37898772515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1481027.9583333333,
            "unit": "ns",
            "range": "± 127452.41833942056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6357344.506666667,
            "unit": "ns",
            "range": "± 320712.5944841688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2364327.9523809524,
            "unit": "ns",
            "range": "± 53377.68863392378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2436152.580645161,
            "unit": "ns",
            "range": "± 56187.27101563971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3089793.882352941,
            "unit": "ns",
            "range": "± 62090.32459840497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2942611.8666666667,
            "unit": "ns",
            "range": "± 142494.02318516906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7127068.382352941,
            "unit": "ns",
            "range": "± 184904.86003249686"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40178.86842105263,
            "unit": "ns",
            "range": "± 5704.497246112672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3762883.0052083335,
            "unit": "ns",
            "range": "± 47940.556733841826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1191519.7494419643,
            "unit": "ns",
            "range": "± 2422.294261472459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778922.2117838542,
            "unit": "ns",
            "range": "± 13622.218713971828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908292.0113932292,
            "unit": "ns",
            "range": "± 4083.7280420133384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623160.6059570312,
            "unit": "ns",
            "range": "± 889.763169414239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576592.3493088942,
            "unit": "ns",
            "range": "± 3328.744938334165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195677.09677419355,
            "unit": "ns",
            "range": "± 5500.281807052184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197418.69491525425,
            "unit": "ns",
            "range": "± 8743.02162762855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164566.79166666666,
            "unit": "ns",
            "range": "± 4170.769061384938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3022490.4615384615,
            "unit": "ns",
            "range": "± 30712.099191836933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2707390.5,
            "unit": "ns",
            "range": "± 44516.16044807168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13516.577319587628,
            "unit": "ns",
            "range": "± 2046.1055377383577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66431.39583333333,
            "unit": "ns",
            "range": "± 7891.92487157023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54133.302083333336,
            "unit": "ns",
            "range": "± 5081.564989190243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64233.86315789474,
            "unit": "ns",
            "range": "± 9723.597719400706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2753.4329896907216,
            "unit": "ns",
            "range": "± 457.99706392837317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14920.537634408602,
            "unit": "ns",
            "range": "± 1595.8043328293577"
          }
        ]
      }
    ]
  }
}
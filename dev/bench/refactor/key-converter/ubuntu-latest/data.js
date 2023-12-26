window.BENCHMARK_DATA = {
  "lastUpdate": 1703577976731,
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
          "id": "51f28a52208cc2bfcbe7a0d6febb960fe6182be0",
          "message": "Changed ToFungibleAssetKey to use HashDigest<SHA1> instead of Currency",
          "timestamp": "2023-12-26T16:51:54+09:00",
          "tree_id": "9787d59da4c1f7b2100d5578dd7adcebde331705",
          "url": "https://github.com/greymistcube/libplanet/commit/51f28a52208cc2bfcbe7a0d6febb960fe6182be0"
        },
        "date": 1703577758211,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3669809.191145833,
            "unit": "ns",
            "range": "± 57459.06679420159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208437.346484375,
            "unit": "ns",
            "range": "± 26598.582546927424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774325.5537923177,
            "unit": "ns",
            "range": "± 2490.947225616172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1980299.4265625,
            "unit": "ns",
            "range": "± 43744.770386345925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618036.6141927083,
            "unit": "ns",
            "range": "± 11422.80830222982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571403.9873046875,
            "unit": "ns",
            "range": "± 3974.7720726559232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2433301.6,
            "unit": "ns",
            "range": "± 32763.754764329788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2534284.6481481483,
            "unit": "ns",
            "range": "± 105527.74908250925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3112668.1315789474,
            "unit": "ns",
            "range": "± 66996.82137004755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2939457.195652174,
            "unit": "ns",
            "range": "± 104317.86632464995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6940398.5,
            "unit": "ns",
            "range": "± 140684.2572241325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38957.04255319149,
            "unit": "ns",
            "range": "± 4520.1809452431935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198191.1607142857,
            "unit": "ns",
            "range": "± 8152.557331686088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196157.51470588235,
            "unit": "ns",
            "range": "± 9236.778079952335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162182.13333333333,
            "unit": "ns",
            "range": "± 2495.0531590863284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3096120.4285714286,
            "unit": "ns",
            "range": "± 30497.82775042356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814527.947368421,
            "unit": "ns",
            "range": "± 60632.55185905934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14351.319587628866,
            "unit": "ns",
            "range": "± 3016.3507530706424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62113.58888888889,
            "unit": "ns",
            "range": "± 3926.276827013993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62216.171428571426,
            "unit": "ns",
            "range": "± 1905.3092613832025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63899.10824742268,
            "unit": "ns",
            "range": "± 15416.013624607951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3426.425531914894,
            "unit": "ns",
            "range": "± 646.6939328476586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15579.938144329897,
            "unit": "ns",
            "range": "± 2839.53116293882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5533369.966666667,
            "unit": "ns",
            "range": "± 43650.34837508936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14287938.92857143,
            "unit": "ns",
            "range": "± 136488.56465172025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36950170.4,
            "unit": "ns",
            "range": "± 312379.28180562804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75315844.78571428,
            "unit": "ns",
            "range": "± 905533.2116108062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149618921.6153846,
            "unit": "ns",
            "range": "± 784985.4165661868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968678.7391304348,
            "unit": "ns",
            "range": "± 66351.10684368234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871193.1206896552,
            "unit": "ns",
            "range": "± 81000.6875998707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1384872.0107526882,
            "unit": "ns",
            "range": "± 102095.52002834689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5975949.0869565215,
            "unit": "ns",
            "range": "± 229541.8367322975"
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
          "id": "025dd07c5c37809a2fff094dbd20b3805b2cc202",
          "message": "Changed ToFungibleAssetKey to use HashDigest<SHA1> instead of Currency",
          "timestamp": "2023-12-26T16:55:44+09:00",
          "tree_id": "10f058436a3f7fa136239cc7f74c114f8bc3fc73",
          "url": "https://github.com/greymistcube/libplanet/commit/025dd07c5c37809a2fff094dbd20b3805b2cc202"
        },
        "date": 1703577970555,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3665185.8106971155,
            "unit": "ns",
            "range": "± 10876.617578793686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209119.8764648438,
            "unit": "ns",
            "range": "± 4435.668933533462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763380.6137695312,
            "unit": "ns",
            "range": "± 1599.2113376113023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1980293.1141183036,
            "unit": "ns",
            "range": "± 3976.583153245036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617048.0014648438,
            "unit": "ns",
            "range": "± 1850.8851777945754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571734.6622596154,
            "unit": "ns",
            "range": "± 552.1875363610003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2405325.6666666665,
            "unit": "ns",
            "range": "± 24912.986583784157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2458613.6304347827,
            "unit": "ns",
            "range": "± 94668.25213968307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3112186.5,
            "unit": "ns",
            "range": "± 66540.68432457208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2917698.121212121,
            "unit": "ns",
            "range": "± 91751.18456209353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6966914.96875,
            "unit": "ns",
            "range": "± 200787.83275917897"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40516.86842105263,
            "unit": "ns",
            "range": "± 4907.565418977658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195033.75,
            "unit": "ns",
            "range": "± 5947.630875588873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191523.04761904763,
            "unit": "ns",
            "range": "± 6099.008284848671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163096.51612903227,
            "unit": "ns",
            "range": "± 4856.852326840005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2981532.6,
            "unit": "ns",
            "range": "± 50300.833790022094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2820419.3333333335,
            "unit": "ns",
            "range": "± 43268.285641806426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11994.57142857143,
            "unit": "ns",
            "range": "± 953.6333693692786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60807.9793814433,
            "unit": "ns",
            "range": "± 4970.001005992901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58984.0625,
            "unit": "ns",
            "range": "± 4183.658964697617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58888.10824742268,
            "unit": "ns",
            "range": "± 11326.18380361473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3132.840425531915,
            "unit": "ns",
            "range": "± 597.494397385736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11083.988235294117,
            "unit": "ns",
            "range": "± 644.7369248312806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5502915.9,
            "unit": "ns",
            "range": "± 20109.007146052736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14060625.933333334,
            "unit": "ns",
            "range": "± 99115.8730335839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36301418.461538464,
            "unit": "ns",
            "range": "± 245083.28866755188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73850948.78571428,
            "unit": "ns",
            "range": "± 506043.36215740046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153295764.42307693,
            "unit": "ns",
            "range": "± 1014867.8247642614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951462.7311827957,
            "unit": "ns",
            "range": "± 79106.65948827786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1849693.3235294118,
            "unit": "ns",
            "range": "± 59511.62091073019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1397995.4646464647,
            "unit": "ns",
            "range": "± 109126.53746840465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5896486.114583333,
            "unit": "ns",
            "range": "± 344106.6577636059"
          }
        ]
      }
    ]
  }
}
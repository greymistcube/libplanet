window.BENCHMARK_DATA = {
  "lastUpdate": 1688712045186,
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
          "id": "89a25a4b080cbe374d3980a9597553c31d3a0b36",
          "message": "More argument clutter removal",
          "timestamp": "2023-07-07T00:28:26+09:00",
          "tree_id": "6712e28f56ebe2d34846870b23e67ddbe59dca6c",
          "url": "https://github.com/greymistcube/libplanet/commit/89a25a4b080cbe374d3980a9597553c31d3a0b36"
        },
        "date": 1688658912545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1621221.7391304348,
            "unit": "ns",
            "range": "± 152920.50784645957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3194092.7083333335,
            "unit": "ns",
            "range": "± 298411.289205384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217420.8333333335,
            "unit": "ns",
            "range": "± 234871.53438990147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6305400,
            "unit": "ns",
            "range": "± 474117.3876406115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52675.294117647056,
            "unit": "ns",
            "range": "± 4583.923924261546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8761029.104477612,
            "unit": "ns",
            "range": "± 399188.2610230164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23804453.44827586,
            "unit": "ns",
            "range": "± 1034634.0294096565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62179002.222222224,
            "unit": "ns",
            "range": "± 2342681.448729686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125073396.36363636,
            "unit": "ns",
            "range": "± 5258011.858423283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256893940.6779661,
            "unit": "ns",
            "range": "± 11263155.628712257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6177063.727678572,
            "unit": "ns",
            "range": "± 67659.30462112078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1953724.0885416667,
            "unit": "ns",
            "range": "± 26789.12547938535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1497220.2864583333,
            "unit": "ns",
            "range": "± 20190.607994422688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3296724.1927083335,
            "unit": "ns",
            "range": "± 52557.764548520696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1081626.4322916667,
            "unit": "ns",
            "range": "± 15236.120287588346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1003406.5625,
            "unit": "ns",
            "range": "± 13577.2044203318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3653337.3626373624,
            "unit": "ns",
            "range": "± 240945.18355304695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3956533.3333333335,
            "unit": "ns",
            "range": "± 253468.39153481516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5225840.816326531,
            "unit": "ns",
            "range": "± 361668.07099132275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4383057.894736842,
            "unit": "ns",
            "range": "± 370962.2841926023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8351420.4301075265,
            "unit": "ns",
            "range": "± 519285.62856543186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320570.21276595746,
            "unit": "ns",
            "range": "± 34463.23841580738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300794.5054945055,
            "unit": "ns",
            "range": "± 23865.59291177416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265570.96774193546,
            "unit": "ns",
            "range": "± 31609.814039606645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4823966.666666667,
            "unit": "ns",
            "range": "± 286727.02905896824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4356914.285714285,
            "unit": "ns",
            "range": "± 197883.62404098644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18702.222222222223,
            "unit": "ns",
            "range": "± 2048.5115329487944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91598.88888888889,
            "unit": "ns",
            "range": "± 9248.583182649763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96748.96907216495,
            "unit": "ns",
            "range": "± 18538.89770436159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113591.48936170213,
            "unit": "ns",
            "range": "± 17212.6651268391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5828.125,
            "unit": "ns",
            "range": "± 1143.2827273849816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17590.80459770115,
            "unit": "ns",
            "range": "± 1737.1208593470449"
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
          "id": "2deaafe8be13aec1e4a3c923d15099d9acf93a02",
          "message": "More argument clutter removal",
          "timestamp": "2023-07-07T12:01:12+09:00",
          "tree_id": "c7f9d9cdecc9cc5e46736f54e11266a42b3a87b6",
          "url": "https://github.com/greymistcube/libplanet/commit/2deaafe8be13aec1e4a3c923d15099d9acf93a02"
        },
        "date": 1688700015762,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1659196.8421052631,
            "unit": "ns",
            "range": "± 146574.64836428262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3006248.936170213,
            "unit": "ns",
            "range": "± 116591.96010826451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2157523.404255319,
            "unit": "ns",
            "range": "± 172124.43324995952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5992285.106382979,
            "unit": "ns",
            "range": "± 364308.9401343542"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56864.21052631579,
            "unit": "ns",
            "range": "± 4417.275462137114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9021211.111111112,
            "unit": "ns",
            "range": "± 184524.78516413257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24642066.666666668,
            "unit": "ns",
            "range": "± 573978.7934526269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62733712.65060241,
            "unit": "ns",
            "range": "± 3334356.893663262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122950255.12820514,
            "unit": "ns",
            "range": "± 4254581.889281788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246956739.2857143,
            "unit": "ns",
            "range": "± 7062634.622897295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5916456.25,
            "unit": "ns",
            "range": "± 87574.05139338861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881872.5520833333,
            "unit": "ns",
            "range": "± 34272.69286800271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1470323.1640625,
            "unit": "ns",
            "range": "± 26412.446894780252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3329536.431525735,
            "unit": "ns",
            "range": "± 63965.2357274979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1005790.3501157408,
            "unit": "ns",
            "range": "± 25109.231850414377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 956460.166015625,
            "unit": "ns",
            "range": "± 21370.45256253082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3870150,
            "unit": "ns",
            "range": "± 59706.47248952878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4047093.3333333335,
            "unit": "ns",
            "range": "± 171489.35418523813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4966100,
            "unit": "ns",
            "range": "± 217327.24213829843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4483983.333333333,
            "unit": "ns",
            "range": "± 67307.21740758204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7520645.833333333,
            "unit": "ns",
            "range": "± 188791.05307459488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320487.9310344828,
            "unit": "ns",
            "range": "± 13078.227220201921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308836.6666666667,
            "unit": "ns",
            "range": "± 9113.176641860244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292505.55555555556,
            "unit": "ns",
            "range": "± 12115.212122776647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4794895.238095238,
            "unit": "ns",
            "range": "± 172474.10261929806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4273076.923076923,
            "unit": "ns",
            "range": "± 112743.7494770945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24051.063829787236,
            "unit": "ns",
            "range": "± 2443.941144639657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115735.71428571429,
            "unit": "ns",
            "range": "± 11167.543177375977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105884.94623655915,
            "unit": "ns",
            "range": "± 11126.788534653839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119980.72289156627,
            "unit": "ns",
            "range": "± 10603.651670030831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6556.25,
            "unit": "ns",
            "range": "± 1404.6398676866384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22396.774193548386,
            "unit": "ns",
            "range": "± 2605.6982546161007"
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
          "id": "3cd0210a469732db3f9f04dd7f50febd03b22470",
          "message": "More argument clutter removal",
          "timestamp": "2023-07-07T15:21:54+09:00",
          "tree_id": "d29e02855e11f03d4d6a62f4547a1f691fd044f0",
          "url": "https://github.com/greymistcube/libplanet/commit/3cd0210a469732db3f9f04dd7f50febd03b22470"
        },
        "date": 1688712021197,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1637134.693877551,
            "unit": "ns",
            "range": "± 125189.76614249479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3078129.5454545454,
            "unit": "ns",
            "range": "± 114147.77769749596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2132743.6170212766,
            "unit": "ns",
            "range": "± 130325.26600325623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5791865.7894736845,
            "unit": "ns",
            "range": "± 198843.01600565395"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54944.62365591398,
            "unit": "ns",
            "range": "± 3312.6688830253997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9355733.333333334,
            "unit": "ns",
            "range": "± 174570.92977872785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24294814.285714287,
            "unit": "ns",
            "range": "± 242307.83300187788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61277500,
            "unit": "ns",
            "range": "± 511328.17551639286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124485492.85714285,
            "unit": "ns",
            "range": "± 1851412.2029763306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250842821.73913044,
            "unit": "ns",
            "range": "± 6229015.179928417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5877289.244791667,
            "unit": "ns",
            "range": "± 64554.0047427433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895006.8033854167,
            "unit": "ns",
            "range": "± 11679.63221226301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1456004.4075520833,
            "unit": "ns",
            "range": "± 15972.934478750023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3208846.09375,
            "unit": "ns",
            "range": "± 32432.661318263694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999239.8856026785,
            "unit": "ns",
            "range": "± 7066.844555120707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 945884.7135416666,
            "unit": "ns",
            "range": "± 6500.429207377313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3970653.846153846,
            "unit": "ns",
            "range": "± 96403.82764504418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4164081.25,
            "unit": "ns",
            "range": "± 81450.87860176832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4990131.25,
            "unit": "ns",
            "range": "± 153493.46615809354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4525367.441860465,
            "unit": "ns",
            "range": "± 166395.10455386178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7458702.702702703,
            "unit": "ns",
            "range": "± 247142.30323448885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320506.0606060606,
            "unit": "ns",
            "range": "± 9989.774127637327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306383.0508474576,
            "unit": "ns",
            "range": "± 13573.632560102706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280079.10447761195,
            "unit": "ns",
            "range": "± 13263.38703158153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4912785.714285715,
            "unit": "ns",
            "range": "± 45156.54577548671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4541237.5,
            "unit": "ns",
            "range": "± 87230.28430539476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23054.444444444445,
            "unit": "ns",
            "range": "± 1586.0459711879723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104362.5,
            "unit": "ns",
            "range": "± 7635.52983030475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91546.875,
            "unit": "ns",
            "range": "± 7388.852957416042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113819.58762886598,
            "unit": "ns",
            "range": "± 16544.413956423843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6385.416666666667,
            "unit": "ns",
            "range": "± 1109.6684347532464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22683.157894736843,
            "unit": "ns",
            "range": "± 1745.0631050943337"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1679042597622,
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
          "id": "e91bd1b21264a90118c46bdd6e6a4984ebd773f0",
          "message": "Implemented IBencodable for BlockHash",
          "timestamp": "2023-03-17T17:27:41+09:00",
          "tree_id": "8289f76ee67db2138eb0bb233531e044803695cf",
          "url": "https://github.com/greymistcube/libplanet/commit/e91bd1b21264a90118c46bdd6e6a4984ebd773f0"
        },
        "date": 1679042392791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3155377.1153846155,
            "unit": "ns",
            "range": "± 84615.67571192795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4895518.533333333,
            "unit": "ns",
            "range": "± 83752.15279183375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22646141.4,
            "unit": "ns",
            "range": "± 337843.97553156316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6065081.684210527,
            "unit": "ns",
            "range": "± 126893.54503417098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25872038.125,
            "unit": "ns",
            "range": "± 479497.27485146705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7556186.923076923,
            "unit": "ns",
            "range": "± 11787.461024760862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19409020,
            "unit": "ns",
            "range": "± 201341.57001119124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49139394.8,
            "unit": "ns",
            "range": "± 327700.4154749535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97947217.2,
            "unit": "ns",
            "range": "± 762867.9358498055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 196695930.92857143,
            "unit": "ns",
            "range": "± 2029065.8884387196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1332169.530612245,
            "unit": "ns",
            "range": "± 101319.30492486524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2414860.6666666665,
            "unit": "ns",
            "range": "± 56148.072789129044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2059450.2567567567,
            "unit": "ns",
            "range": "± 101907.74650580829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4979245.324324325,
            "unit": "ns",
            "range": "± 167075.58401248854"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44064.09333333333,
            "unit": "ns",
            "range": "± 2227.1534078239833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5849628.813616072,
            "unit": "ns",
            "range": "± 14796.598517352373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910423.9454427084,
            "unit": "ns",
            "range": "± 3431.778679144006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340929.365234375,
            "unit": "ns",
            "range": "± 1698.6913731709863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567224.3778645834,
            "unit": "ns",
            "range": "± 2978.8492492129035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815952.3296223958,
            "unit": "ns",
            "range": "± 787.8171140434271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724438.3609375,
            "unit": "ns",
            "range": "± 598.967813923959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189533.83333333334,
            "unit": "ns",
            "range": "± 2665.951470380555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188303.25714285715,
            "unit": "ns",
            "range": "± 6122.673970544229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159015.84615384616,
            "unit": "ns",
            "range": "± 2657.3630678473305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11414174.666666666,
            "unit": "ns",
            "range": "± 51833.54784365629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9023166.714285715,
            "unit": "ns",
            "range": "± 71607.46329971324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16870.875,
            "unit": "ns",
            "range": "± 1332.844092039354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49080.510869565216,
            "unit": "ns",
            "range": "± 2748.5717829509936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37671.42857142857,
            "unit": "ns",
            "range": "± 650.950277468459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78014.16853932584,
            "unit": "ns",
            "range": "± 6862.259222859936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4372.631578947368,
            "unit": "ns",
            "range": "± 317.7186314640603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15601.106382978724,
            "unit": "ns",
            "range": "± 1244.2032858492055"
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
          "id": "c88d92e42eaf0f92f832242ec182e0edb1526d4c",
          "message": "Changelog",
          "timestamp": "2023-03-17T17:30:21+09:00",
          "tree_id": "6c36baaf4c24339c0dc0ba1ef9b36b853d3e936d",
          "url": "https://github.com/greymistcube/libplanet/commit/c88d92e42eaf0f92f832242ec182e0edb1526d4c"
        },
        "date": 1679042589900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3243212.8181818184,
            "unit": "ns",
            "range": "± 79224.07345031311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5222646.954545454,
            "unit": "ns",
            "range": "± 112670.00896020676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23372146.333333332,
            "unit": "ns",
            "range": "± 249165.41066461586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6232387.133333334,
            "unit": "ns",
            "range": "± 88510.70519665701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27394370.933333334,
            "unit": "ns",
            "range": "± 315045.86336016597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7802575.533333333,
            "unit": "ns",
            "range": "± 37945.25078671463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19796979.285714287,
            "unit": "ns",
            "range": "± 138551.3520070772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50748093.071428575,
            "unit": "ns",
            "range": "± 268610.06195554876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102663348.73333333,
            "unit": "ns",
            "range": "± 523284.0351593369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 205389145.06666666,
            "unit": "ns",
            "range": "± 967623.4413413152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352713.255319149,
            "unit": "ns",
            "range": "± 98372.4179332888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2476260.6071428573,
            "unit": "ns",
            "range": "± 68484.99962675756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2101475.9615384615,
            "unit": "ns",
            "range": "± 107811.87910194317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5018093.909090909,
            "unit": "ns",
            "range": "± 155214.3927542972"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46415.77142857143,
            "unit": "ns",
            "range": "± 2194.00498177224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5952583.158653846,
            "unit": "ns",
            "range": "± 16199.268538437895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839658.0220424107,
            "unit": "ns",
            "range": "± 1393.6092323771238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353459.4145833333,
            "unit": "ns",
            "range": "± 555.3542814609664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2531217.2630208335,
            "unit": "ns",
            "range": "± 3946.035472809221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815048.855859375,
            "unit": "ns",
            "range": "± 924.0855457262207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740192.4143880209,
            "unit": "ns",
            "range": "± 2491.367852717443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196932.39285714287,
            "unit": "ns",
            "range": "± 8375.04958287319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200838.9625,
            "unit": "ns",
            "range": "± 9904.291724711878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180031.55813953487,
            "unit": "ns",
            "range": "± 9738.510796414108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11465679.8,
            "unit": "ns",
            "range": "± 66741.56857846754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9293050.8,
            "unit": "ns",
            "range": "± 57814.33055319663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18912.797872340427,
            "unit": "ns",
            "range": "± 1590.4398768000804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52120.066666666666,
            "unit": "ns",
            "range": "± 2421.275084751015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41103.18461538461,
            "unit": "ns",
            "range": "± 1904.994864595339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89649.60824742269,
            "unit": "ns",
            "range": "± 11079.583841233898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4865.95744680851,
            "unit": "ns",
            "range": "± 659.5132110800436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18456.77894736842,
            "unit": "ns",
            "range": "± 1463.9103142141971"
          }
        ]
      }
    ]
  }
}
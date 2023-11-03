window.BENCHMARK_DATA = {
  "lastUpdate": 1698993252592,
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
          "id": "3cf2b69679f69efe3e013b93a465dfa18cd823eb",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T11:30:24+09:00",
          "tree_id": "433e7e18bf05b1ccd8d1d5fc493971275c2c56c6",
          "url": "https://github.com/greymistcube/libplanet/commit/3cf2b69679f69efe3e013b93a465dfa18cd823eb"
        },
        "date": 1698979674969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532709.4736842106,
            "unit": "ns",
            "range": "± 146399.39474476984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2901417.5,
            "unit": "ns",
            "range": "± 102505.95952031027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2243061.111111111,
            "unit": "ns",
            "range": "± 110200.69598660048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10280760.227272727,
            "unit": "ns",
            "range": "± 588788.4038361335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59231.57894736842,
            "unit": "ns",
            "range": "± 4639.498853115788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9342139.130434783,
            "unit": "ns",
            "range": "± 231719.4242635426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24340666.666666668,
            "unit": "ns",
            "range": "± 399424.5372437464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62647257.14285714,
            "unit": "ns",
            "range": "± 823917.9129335321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123119069.23076923,
            "unit": "ns",
            "range": "± 613350.0242990883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247651571.42857143,
            "unit": "ns",
            "range": "± 2176647.439537225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5434771.986607143,
            "unit": "ns",
            "range": "± 20337.89713321018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790239.1927083333,
            "unit": "ns",
            "range": "± 8366.761533184519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1317426.4192708333,
            "unit": "ns",
            "range": "± 10603.697343128955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3145416.819852941,
            "unit": "ns",
            "range": "± 60466.962511474376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013675.0130208334,
            "unit": "ns",
            "range": "± 10601.378113873203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 941657.7218191965,
            "unit": "ns",
            "range": "± 5706.048070216442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4034662.5,
            "unit": "ns",
            "range": "± 123860.86041173573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4160609.090909091,
            "unit": "ns",
            "range": "± 130359.08187492241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4905855.555555556,
            "unit": "ns",
            "range": "± 98700.93403349823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4794697.435897436,
            "unit": "ns",
            "range": "± 159849.17148622108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11798570,
            "unit": "ns",
            "range": "± 395004.62197880086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301606.52173913043,
            "unit": "ns",
            "range": "± 11207.624432083188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287256.7164179105,
            "unit": "ns",
            "range": "± 13511.131481234695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255092.40506329114,
            "unit": "ns",
            "range": "± 13240.165892444898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4889821.428571428,
            "unit": "ns",
            "range": "± 64470.857203634485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4561546.666666667,
            "unit": "ns",
            "range": "± 66446.35716841352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23704.347826086956,
            "unit": "ns",
            "range": "± 1639.5465094984067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102620.21276595745,
            "unit": "ns",
            "range": "± 7893.832896869952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83186.45833333333,
            "unit": "ns",
            "range": "± 6098.621410944861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100779.16666666667,
            "unit": "ns",
            "range": "± 12951.577157906018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6650.526315789473,
            "unit": "ns",
            "range": "± 825.6362709811667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23264.583333333332,
            "unit": "ns",
            "range": "± 1731.1376950717251"
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
          "id": "142e48097ebf05b86f61f397382388d721ecbd11",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T15:19:37+09:00",
          "tree_id": "0353fbdd6a340ae1c7174cc775146df82e769b4e",
          "url": "https://github.com/greymistcube/libplanet/commit/142e48097ebf05b86f61f397382388d721ecbd11"
        },
        "date": 1698993229396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1245228.125,
            "unit": "ns",
            "range": "± 100238.95209172614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2300717.4603174604,
            "unit": "ns",
            "range": "± 102475.54789327367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1805257.2916666667,
            "unit": "ns",
            "range": "± 105221.80556958981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7166317.857142857,
            "unit": "ns",
            "range": "± 152540.2534696053"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43415.38461538462,
            "unit": "ns",
            "range": "± 2205.826224041534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6832726.666666667,
            "unit": "ns",
            "range": "± 15571.836604527267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17435300,
            "unit": "ns",
            "range": "± 171185.94927963344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44929813.333333336,
            "unit": "ns",
            "range": "± 259426.62840157622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90000666.66666667,
            "unit": "ns",
            "range": "± 1084258.6892610523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180395566.66666666,
            "unit": "ns",
            "range": "± 1435469.6477194529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4421807.356770833,
            "unit": "ns",
            "range": "± 4946.989950253394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1460254.0318080357,
            "unit": "ns",
            "range": "± 992.7904331898303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1083681.7545572917,
            "unit": "ns",
            "range": "± 1770.8272663903304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2509641.1272321427,
            "unit": "ns",
            "range": "± 8922.658254031772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827231.9905598959,
            "unit": "ns",
            "range": "± 842.5714897018509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720195.2864583334,
            "unit": "ns",
            "range": "± 1040.1906842045523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2927328.2608695654,
            "unit": "ns",
            "range": "± 72251.42940719858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3070506.25,
            "unit": "ns",
            "range": "± 57975.24148289509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3848716.6666666665,
            "unit": "ns",
            "range": "± 48614.69011768043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3498608.510638298,
            "unit": "ns",
            "range": "± 135418.31779917984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8915602.94117647,
            "unit": "ns",
            "range": "± 245258.46661355608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238235.13513513515,
            "unit": "ns",
            "range": "± 6363.05378363671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224417.64705882352,
            "unit": "ns",
            "range": "± 9092.495936371992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194438.46153846153,
            "unit": "ns",
            "range": "± 2609.1309094340404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3711514.285714286,
            "unit": "ns",
            "range": "± 35733.04562237243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3412815.3846153845,
            "unit": "ns",
            "range": "± 25076.477894428146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16608.88888888889,
            "unit": "ns",
            "range": "± 1496.0355433833006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76780.43478260869,
            "unit": "ns",
            "range": "± 4698.216615836941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63875,
            "unit": "ns",
            "range": "± 1816.513755032486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71215.625,
            "unit": "ns",
            "range": "± 8358.919951952998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4028.2608695652175,
            "unit": "ns",
            "range": "± 409.5900086126119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15288.172043010753,
            "unit": "ns",
            "range": "± 1271.4122122890503"
          }
        ]
      }
    ]
  }
}
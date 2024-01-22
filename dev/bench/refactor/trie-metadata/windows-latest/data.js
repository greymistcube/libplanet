window.BENCHMARK_DATA = {
  "lastUpdate": 1705899244012,
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
          "id": "b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d",
          "message": "Move TrieMetadata to Libplanet.Store",
          "timestamp": "2024-01-22T13:33:41+09:00",
          "tree_id": "f25875bc53002857b9c25706e851573729068f20",
          "url": "https://github.com/greymistcube/libplanet/commit/b2580dff0a682fd5fa0955c41f4b0a6ed9b6ba0d"
        },
        "date": 1705898705284,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990677.3684210526,
            "unit": "ns",
            "range": "± 99885.32301414166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771771.2328767122,
            "unit": "ns",
            "range": "± 87779.76462502943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1532934.375,
            "unit": "ns",
            "range": "± 153257.73944782655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10930364.89361702,
            "unit": "ns",
            "range": "± 1004246.0176784905"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34700,
            "unit": "ns",
            "range": "± 1662.1331376168935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5025493.333333333,
            "unit": "ns",
            "range": "± 64961.53220688892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13158650,
            "unit": "ns",
            "range": "± 168577.80738536478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33178173.076923076,
            "unit": "ns",
            "range": "± 321570.5032955349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68137233.33333333,
            "unit": "ns",
            "range": "± 1230372.4921843018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134559071.42857143,
            "unit": "ns",
            "range": "± 690609.1095531554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3492098.8020833335,
            "unit": "ns",
            "range": "± 15880.349429142065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088671.3541666667,
            "unit": "ns",
            "range": "± 2583.400878843571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763085.4073660715,
            "unit": "ns",
            "range": "± 1364.091670456194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937414.0904017857,
            "unit": "ns",
            "range": "± 5805.089944681967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622384.1646634615,
            "unit": "ns",
            "range": "± 878.831999943603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581725.2473958334,
            "unit": "ns",
            "range": "± 1990.020469506394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2170946.0317460317,
            "unit": "ns",
            "range": "± 93788.68290177973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2266188.13559322,
            "unit": "ns",
            "range": "± 70914.10560706709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2858297.727272727,
            "unit": "ns",
            "range": "± 102149.21026373765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2789870.930232558,
            "unit": "ns",
            "range": "± 130931.49274359344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12526374.468085106,
            "unit": "ns",
            "range": "± 1545716.5631300781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177528.26086956522,
            "unit": "ns",
            "range": "± 6761.719473739346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170747.36842105264,
            "unit": "ns",
            "range": "± 5567.030025810052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141889.6551724138,
            "unit": "ns",
            "range": "± 3862.211138305011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2835040,
            "unit": "ns",
            "range": "± 42962.937515956706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2501714.285714286,
            "unit": "ns",
            "range": "± 44306.70824609289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11873.863636363636,
            "unit": "ns",
            "range": "± 1151.3604464905623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58220.87912087912,
            "unit": "ns",
            "range": "± 5144.587587045385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46012.94117647059,
            "unit": "ns",
            "range": "± 2484.56129284974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60336.26373626374,
            "unit": "ns",
            "range": "± 10802.587308228181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2825.2631578947367,
            "unit": "ns",
            "range": "± 492.9219050511789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10827.956989247312,
            "unit": "ns",
            "range": "± 1381.1908528668332"
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
          "id": "36387cb116e4dd7f8aa53ed114e43aeb59f4746f",
          "message": "Implemented IBencodable for TrieMetadata",
          "timestamp": "2024-01-22T13:41:25+09:00",
          "tree_id": "fc05547f3c6b2053cad9f3fc3965daaf190212c9",
          "url": "https://github.com/greymistcube/libplanet/commit/36387cb116e4dd7f8aa53ed114e43aeb59f4746f"
        },
        "date": 1705899223624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962013.4408602151,
            "unit": "ns",
            "range": "± 102434.66081291955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1699095.238095238,
            "unit": "ns",
            "range": "± 77005.96421930981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1515404,
            "unit": "ns",
            "range": "± 186967.0926158187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10896055.494505495,
            "unit": "ns",
            "range": "± 1039039.8789654735"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34025.71428571428,
            "unit": "ns",
            "range": "± 1669.6511580710605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5012013.333333333,
            "unit": "ns",
            "range": "± 30308.859305175974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13421100,
            "unit": "ns",
            "range": "± 133643.04206470193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32913026.666666668,
            "unit": "ns",
            "range": "± 429657.934485873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65871971.428571425,
            "unit": "ns",
            "range": "± 596825.3944233367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133457112.5,
            "unit": "ns",
            "range": "± 2550065.609319363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3242255.3185096155,
            "unit": "ns",
            "range": "± 10264.739669690254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066341.4453125,
            "unit": "ns",
            "range": "± 2900.182845266116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741996.93359375,
            "unit": "ns",
            "range": "± 1634.5284554514674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933373.2421875,
            "unit": "ns",
            "range": "± 5437.481813543719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621065.7291666666,
            "unit": "ns",
            "range": "± 1948.1248679608964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573735.625,
            "unit": "ns",
            "range": "± 1429.7344134910043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2096164,
            "unit": "ns",
            "range": "± 40526.85200374356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2320757.1428571427,
            "unit": "ns",
            "range": "± 40928.97627477505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2768030.769230769,
            "unit": "ns",
            "range": "± 90081.43144676363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2729070.3703703703,
            "unit": "ns",
            "range": "± 143203.06425182076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12315599.462365592,
            "unit": "ns",
            "range": "± 1498361.3302555368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177695.83333333334,
            "unit": "ns",
            "range": "± 8009.016705660521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174705.97014925373,
            "unit": "ns",
            "range": "± 8016.401380295558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142858,
            "unit": "ns",
            "range": "± 3780.31303818436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2868071.4285714286,
            "unit": "ns",
            "range": "± 27885.133303261424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2589450,
            "unit": "ns",
            "range": "± 43657.033092750804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12938.947368421053,
            "unit": "ns",
            "range": "± 2197.5951428991793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59005.37634408602,
            "unit": "ns",
            "range": "± 6886.176537272176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46268.94736842105,
            "unit": "ns",
            "range": "± 2876.881243410963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60476.767676767675,
            "unit": "ns",
            "range": "± 14003.285534902365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2518.75,
            "unit": "ns",
            "range": "± 461.6475073610076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10404.255319148937,
            "unit": "ns",
            "range": "± 1525.0534905913796"
          }
        ]
      }
    ]
  }
}